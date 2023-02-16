FROM node:18.14.0-alpine AS builder


# Create app directory
WORKDIR /usr/src/app

COPY package-lock.json ./
COPY package.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]