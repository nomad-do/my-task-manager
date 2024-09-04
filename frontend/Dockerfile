# Stage 1: Build the React app
FROM node:lts-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json from the frontend directory
COPY frontend/package.json frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the frontend directory
COPY frontend/ .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Add a health check to ensure Nginx is running
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost/ || exit 1

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]

