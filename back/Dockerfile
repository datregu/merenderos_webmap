# Use an official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /app

# Install wget to download the wait-for-it script
RUN apt-get update && apt-get install -y wget

# Download the wait-for-it script
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/local/bin/wait-for-it && \
    chmod +x /usr/local/bin/wait-for-it

# Copy package.json and package-lock.json, then install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend files
COPY . .


#New: give permision
RUN mkdir -p /data
RUN chmod -R 777 /data

# Expose the necessary port for the backend
EXPOSE 3000

# Start the backend, waiting for the DB to be ready first
CMD ["wait-for-it", "db:5432", "--", "node", "index.js"]

