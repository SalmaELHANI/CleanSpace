FROM node:14

WORKDIR /clean-space

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 3000

CMD ["npm", "run", "dev"]


# construire l'image Docker: docker build -t clean-space .
# exécuter le conteneur: docker run -p 5173:5173 -p 3000:3000 clean-space