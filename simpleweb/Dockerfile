FROM node:alpine
# we should add workdir in order to place files in a specific directory 
WORKDIR /usr/app

COPY ./package.json ./
RUN npm install 
COPY ./ ./

CMD [ "npm","start" ]