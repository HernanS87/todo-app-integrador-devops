# 1) Etapa de build: genera tu dist/
FROM node:22-alpine AS builder
WORKDIR /app

# Copia e instala dependencias
COPY package*.json ./
RUN npm install

# Copia tu código y genera la build de producción
COPY . .
RUN npm run build -- --configuration production
# --output-path por defecto será /app/dist/todo-app

# 2) Etapa de runtime: servidor estático con Nginx
FROM nginx:stable-alpine
# Borra la web default de nginx (opcional)
RUN rm -rf /usr/share/nginx/html/*

# Copia la build de Angular al root de nginx
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Expone el 80 y arranca nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
