# Use an official node image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port (e.g., 5000 or whatever port the backend runs on)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
