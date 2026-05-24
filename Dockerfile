FROM httpd:2.4-alpine
RUN apk update && apk add --no-cache git
WORKDIR /usr/local/apache2/htdocs/
RUN rm -rf *
RUN git clone https://github.com/emn178/online-tools.git
EXPOSE 80
