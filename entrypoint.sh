#!/bin/bash

# Start Nginx
nginx

# Obtain SSL certificate for multiple domains
certbot --nginx -n -d menbosha.kr -d www.menbosha.kr --agree-tos --email swlee456@naver.com --redirect

# Keep container running
tail -f /dev/null
