FROM node:10-alpine

WORKDIR /login

COPY package.json .

RUN yarn install --quiet

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev"]