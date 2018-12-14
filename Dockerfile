
FROM node:8-alpine

MAINTAINER Bakare Emmanuel<emmanuel.bakare@interswitchgroup.com>

COPY package.json index.js /app/

WORKDIR /app/

RUN apk add git

RUN npm install

ENTRYPOINT [ "npm", "start" ]