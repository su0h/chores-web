# Stage 1: Build the Angular application
FROM node:20 as build
WORKDIR /app

# Install dependencies and copy the necessary files
RUN apt-get update && apt-get install -y gettext
COPY package*.json ./
RUN npm install
COPY . .
COPY entrypoint.sh /app/entrypoint.sh

# Stage 2: Create the final image
FROM nginx:1.19

# Copy built files (and entry point script)
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/chores/browser/ /usr/share/nginx/html
COPY --from=build /app/entrypoint.sh /app/entrypoint.sh

# Set the entry point script as the starting script for the image
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]