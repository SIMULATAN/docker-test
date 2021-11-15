FROM node:14

EXPOSE 3000

ENV folder=docker-test-server

ADD index.js /node_modules package.json package-lock.json $folder
RUN cd $folder && npm install

ENTRYPOINT cd $folder && npm start