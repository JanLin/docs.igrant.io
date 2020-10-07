# Stage 1 - the build process
FROM node:14.13.0-alpine3.10 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build --production

# Stage 2 - the production environment
FROM nginx:1.15.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY resources/config/nginx.conf /etc/nginx/conf.d/default.conf
COPY resources/docker/start.sh /
RUN chmod +x /start.sh
EXPOSE 80
ENTRYPOINT ["sh", "/start.sh"]
CMD ["nginx", "-g", "daemon off;"]
