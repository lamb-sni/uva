FROM node:20.10.0

WORKDIR /usr/server

COPY ./package.json ./
RUN npm install

COPY ./ .

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]