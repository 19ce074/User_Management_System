FROM node:14-alpine
WORKDIR /server

COPY package.json ./
RUN  npm i
COPY . .
CMD [ "npm","start" ]