FROM node:alpine3.18

WORKDIR /app
COPY . /app

CMD ["node", "-v"]