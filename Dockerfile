FROM node:16.14.0-alpine3.15

RUN apk add --no-cache yarn

WORKDIR /app

COPY . .

RUN yarn install && \
    yarn run build

EXPOSE 80

CMD ["yarn","start"]