FROM node:14

WORKDIR /clean-space

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 3000

CMD ["npm", "run", "dev"]
