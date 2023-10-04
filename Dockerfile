FROM node

WORKDIR /home/app

COPY . /home/app/

RUN npm i

CMD ["node", "/home/app/src/index.js"]
