# Etapa de construcción
FROM node:18-alpine AS builder

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./
COPY tsconfig.json ./

# Instalar dependencias incluyendo las de desarrollo
RUN npm ci

# Copiar el código fuente
COPY src/ ./src/

# Compilar la aplicación
RUN npm run build

# Etapa de producción
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar solo los archivos necesarios de la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=3000

# Puerto de la aplicación
EXPOSE ${PORT}

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:prod"]