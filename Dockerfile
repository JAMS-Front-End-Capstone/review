FROM node:latest

RUN mkdir -p /src/app

WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm","run","start"]