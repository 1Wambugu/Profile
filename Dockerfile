FROM node:alpine

# Copy app files to the container
WORKDIR /app
COPY package.json . 
COPY public ./public
COPY src ./src

# Install dependencies
RUN npm install

EXPOSE 3000

# Start the app
CMD ["npm", "start"]




