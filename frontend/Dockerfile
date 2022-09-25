FROM node:16.14.2-alpine
EXPOSE 3333
WORKDIR /app
COPY ./frontend/package*.json ./

RUN apk update && \
    apk upgrade

RUN npm install

CMD ["npm", "run", "dev"]