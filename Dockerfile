<<<<<<< HEAD
# https://www.youtube.com/watch?v=9zUHg7xjIqQ
# Made with the help of this tutorial
FROM node:17
WORKDIR /sem
# COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
=======
# Base image to use
FROM node:latest

# set a working directory
WORKDIR /src

# Copy across project configuration information
# Install application dependencies
COPY package*.json ./

# Ask npm to install the dependencies
RUN npm install -g supervisor && npm install

# Copy across all our files
COPY . ./

# Expose our application port (3000)
EXPOSE 3000

# Run no-demon so files can be updated
CMD ["supervisor", "-e",".","index.js"]
>>>>>>> develop
