# FROM node:18-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /app

# # Install dependencies based on the preferred package manager
# COPY package.json package-lock.json* ./
# RUN npm ci; 
# RUN rm -rf ./.next/cache

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# COPY package.json package-lock.json ./
# RUN npm run build

# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry during the build.
# # ENV NEXT_TELEMETRY_DISABLED 1
# # If using npm comment out above and use below instead
# # RUN npm run build

# # Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV=production
# # Uncomment the following line in case you want to disable telemetry during runtime.
# # ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /app/public ./public

# # Set the correct permission for prerender cache
# RUN mkdir .next
# RUN chown nextjs:nodejs .next

# # Automatically leverage output traces to reduce image size
# # https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 80

# ENV PORT 80
# # set hostname to localhost

# CMD ["node", "server.js"]

# Base Image 지정
FROM nginx:latest

# 필요한 패키지 및 도구 설치
RUN apt-get update \
    && apt-get install -y certbot python3-certbot-nginx \
    && rm -rf /var/lib/apt/lists/*

# Nginx SSL 설정 파일 복사
COPY options-ssl-nginx.conf /etc/letsencrypt/options-ssl-nginx.conf


# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 포트 노출
EXPOSE 80
EXPOSE 443

# 실행 명령 지정
CMD ["nginx", "-g", "daemon off;"]

# SSL 인증서 생성 및 관리를 위한 작업
RUN certbot --nginx --non-interactive --agree-tos --email swlee456@naver.com -d menbosha.kr
