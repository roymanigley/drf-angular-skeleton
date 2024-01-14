# Use an official Node runtime as a parent image
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the app files to the working directory
COPY . .

# Build the Angular app for production
RUN ng build --configuration production

# Use a smaller base image for the final image
FROM nginx:alpine

# Copy the built app from the builder image to the nginx image
COPY --from=builder /app/dist/frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
