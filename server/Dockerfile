# node.js runtime for base image
FROM node:14-alpine


# working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy all the server code
COPY . .

# container port
EXPOSE 8080

# startup command
CMD ["npm", "start"]
