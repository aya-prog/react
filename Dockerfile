# Phase 1: Die App bauen (Node.js)
#FROM node:20-alpine as build
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build

# Phase 2: Die App servieren (Nginx Webserver)
# Das ist viel leichter und schneller als Node im Live-Betrieb
#FROM nginx:alpine
#COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]