FROM node:14

EXPOSE 3000

ENV folder=docker-test-server

ADD . $folder
#RUN cd $folder && npm install && npm run-script build

#ENTRYPOINT cd $folder && npm run-script start