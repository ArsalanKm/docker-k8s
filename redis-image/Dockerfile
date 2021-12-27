# Use an existing docke image as a base

FROM alpine



#Download and install dependency 
RUN apk add --update redis
RUN apk add --update gcc
#tell the image what to do when it starts

CMD [ "redis-server" ]
# as a container