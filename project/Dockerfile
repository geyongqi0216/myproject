# FROM cache-registry.caas.intel.com/cache/library/nginx
FROM nginx

ARG UI_INSTANCE
ARG CACHEBUST=1
COPY ./dist /etc/nginx/html
COPY ./build/nginx/certs/ /etc/nginx/certs
COPY ./build/nginx/mime.types /etc/nginx/mime.types
COPY ./build/nginx/passwd.db /etc/nginx/passwd.db
COPY ./build/nginx/$UI_INSTANCE/nginx.conf /etc/nginx/nginx.conf
RUN chmod 777 /var/log/nginx
EXPOSE 80 443
