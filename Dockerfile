FROM node:16-alpine

RUN mkdir -p /srv/app/mercado-libre-test-practico
WORKDIR /srv/app/mercado-libre-test-practico

COPY package.json /srv/app/mercado-libre-test-practico
COPY package-lock.json /srv/app/mercado-libre-test-practico

RUN npm install

COPY . /srv/app/mercado-libre-test-practico

CMD npm run dev