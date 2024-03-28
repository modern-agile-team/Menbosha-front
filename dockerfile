FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci; 
RUN rm -rf ./.next/cache

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY package.json package-lock.json ./
RUN npm run build

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1
# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 80

ENV PORT 80
# set hostname to localhost

CMD ["node", "server.js"]

#######################################- 여기서부터 ngninx dockerfile -##########################################
# #nginx 이미지 사용
# FROM nginx:latest

# #nignx와 certbot 설치 -(+인증서 갱신을 위한 cron)
# RUN apt-get update && apt-get install -y certbot python3-certbot-nginx cron

# #nginx.conf(설정파일 복사)
# COPY nginx.conf /etc/nginx/nginx.conf

# #SSL 인증서 갱신을 위한 cron 스크립트 복사
# COPY renew_ssl_cert.sh /renew_ssl_cert.sh

# #스크립트 권한 부여
# RUN chmod +x /renew_ssl_cert.sh

# #cron 작업 추가
# RUN echo "0 0 1 * * root /renew_ssl_cert.sh" >> /etc/crontab

# #port
# EXPOSE 80
# EXPOSE 443

# #entrypoint.sh 복사, 권한부여
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# #컨테이너가 실행될 때 entrypoint.sh 실행
# CMD ["/entrypoint.sh"]

