FROM node:9-alpine

LABEL author="Christian-Friedrich Stüben <cf.stueben@gmail.com>"

COPY src/ /app/src
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
COPY webpack.config.js /app/webpack.config.js
COPY static/ /app/dist


EXPOSE 8080

WORKDIR /app
RUN npm install
RUN npm run build
RUN rm -rf node_modules/
