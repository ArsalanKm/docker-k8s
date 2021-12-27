FROM node:alpine
# we should add workdir in order to place files in a specific directory 
WORKDIR /usr/app

COPY ./ ./

RUN npm install 

CMD [ "npm","start" ]