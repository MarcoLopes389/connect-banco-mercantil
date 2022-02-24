FROM node:alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install -g yarn

RUN yarn install

COPY . .

RUN yarn build

RUN rm -rf src

CMD ["yarn", "start"]