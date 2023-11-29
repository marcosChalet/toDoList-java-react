FROM node:18-alpine

WORKDIR /react-app/

COPY app/ /react-app/

RUN npm i

EXPOSE 5173

CMD [ "npm", "run", "host" ]