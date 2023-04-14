FROM node:14-alpine

WORKDIR /client
COPY package.json ./
RUN npm i
COPY . .
CMD ["npm","start"]
EXPOSE 3000