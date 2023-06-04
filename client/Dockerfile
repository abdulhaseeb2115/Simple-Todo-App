# node.js runtime for base image
FROM node:14-alpine


# working directory 
WORKDIR /app


# copy package.json and package-lock.json 
COPY package*.json ./


# install dependencies
RUN npm install


# copy client code
COPY . .


# build the client app
RUN npm run build


# container port
EXPOSE 3000


# startup command
CMD ["npm", "start"]
