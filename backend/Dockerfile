# Backend Dockerfile (Example for Node.js backend)

FROM node:lts-alpine AS build

WORKDIR /app

# Copy package files from the backend directory
COPY backend/package.json backend/package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY backend/ .

# Expose any necessary ports (e.g., for API)
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]

