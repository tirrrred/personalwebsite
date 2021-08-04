#build stage
FROM node:alpine as build 
WORKDIR /app
COPY package*.json ./
#Install the node.js project
RUN npm install 
COPY . .
RUN npm run build

#production stage
FROM nginx:alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
#EXPOSE 8888
CMD ["nginx", "-g", "daemon off;"]

