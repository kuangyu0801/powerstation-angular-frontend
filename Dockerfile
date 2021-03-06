# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Install all the dependencies
COPY package*.json /usr/local/app
RUN npm install

# Add the source code to app
COPY ./ /usr/local/app/

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/powerstation-angular-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80


# docker build -t kuangyu0801/powerstation-angular-frontend:latest .
# docker run -d -p 4200:80 kuangyu0801/powerstation-angular-frontend