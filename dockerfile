# syntax = docker /dockerfile:1

FROM node:latest

ENV NODE_ENV=development

WORKDIR .

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]
