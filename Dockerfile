# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the application files to the container
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Start the Node.js application
CMD ["npm", "start"]
