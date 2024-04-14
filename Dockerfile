FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 3000

CMD ["npm", "run", "dev"]

# docker build -t clean-space .
#docker run -p 5173:5173 -p 3000:3000 clean-space