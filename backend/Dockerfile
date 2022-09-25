FROM node:16.14.2-alpine
WORKDIR /api
COPY ./backend/package*.json ./
RUN npm install
COPY . . 
# CMD ["npm", "run", "start"]