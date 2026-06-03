# Stage 1 - Build React App

FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy source code

COPY . .

# Build Vite application

RUN npm run build

# Stage 2 - Serve with Nginx

FROM nginx:1.29-alpine

# Remove default nginx files

RUN rm -rf /usr/share/nginx/html/*

# Copy build output

COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
