# https://www.youtube.com/watch?v=9zUHg7xjIqQ
# Made with the help of this tutorial
FROM node:17
WORKDIR /sem
# COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]