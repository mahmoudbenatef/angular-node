#build
FROM alpine
RUN apk add --update nodejs npm 
RUN mkdir -p /home/angular/code
WORKDIR /home/angular/code
COPY  . .
RUN ls
RUN npm install -g @angular/cli
CMD ng serve --port 4200


