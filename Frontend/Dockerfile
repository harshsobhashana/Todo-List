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

# Build the app for production (Vite build command)
RUN npm run build

# Expose the Vite dev server port (default 5173, can be customized)
EXPOSE 5173

# Serve the production build
RUN npm install -g serve
CMD ["serve", "-s", "dist"]