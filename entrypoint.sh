#!/bin/bash

# Start Nginx
nginx

# Obtain SSL certificate
certbot --nginx -n -d menbosha.kr --agree-tos --email swlee456@naver.com --redirect

# Keep container running
tail -f /dev/null
