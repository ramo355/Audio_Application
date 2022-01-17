FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install npm@latest -g

RUN npm uninstall node-sass --legacy-peer-deps

RUN npm install sass

RUN npm install

COPY . .

CMD ["npm", "start"]
