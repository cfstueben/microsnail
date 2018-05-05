FROM node:9-alpine

LABEL author="Christian-Friedrich Stüben <cf.stueben@gmail.com>"

COPY src/ /app/src
COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json

EXPOSE 3000

WORKDIR /app
RUN npm install
RUN npm run tsc

CMD [ "node", "dist/index.js" ]

