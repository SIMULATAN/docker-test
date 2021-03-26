FROM node:14

EXPOSE 3000

ADD . .

RUN npm install

CMD node server.js