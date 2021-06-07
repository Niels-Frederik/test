FROM node:15
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . .
CMD ["node", "index2.js"]
