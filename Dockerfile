# Use the latest Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the application code to the working directory
COPY . .

# Build the typescript files
RUN npm run build

# Expose the port that the app will listen on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]