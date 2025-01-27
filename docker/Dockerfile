FROM node:23-bookworm AS build

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@latest

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]

#RUN npm run build --prod



#FROM nginx:1.19

#COPY --from=build /app/dist /usr/share/nginx/html

#EXPOSE 80

#CMD ["nginx", "-g", "daemon off;"]