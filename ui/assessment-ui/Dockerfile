FROM node:17

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app/

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

ENV PORT=8000 
EXPOSE 8000

CMD ["npm", "start"]