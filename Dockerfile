FROM node:12.14.1-alpine3.11

WORKDIR /webapp

EXPOSE 3000

COPY package*.json /webapp/

RUN npm install

COPY . /webapp/

RUN cd client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY . .

CMD [ "node", "server/server.js" ]

# Install npm production packages
# COPY --chown=default:root . ./app

# ENV NODE_ENV production
# ENV PORT 3000

# EXPOSE 3000/tcp

# WORKDIR ./app

# RUN npm install --production

# CMD ["npm", "start"]
