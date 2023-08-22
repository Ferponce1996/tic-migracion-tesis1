# Usa la imagen de NodeJS como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/backend

# Copia el archivo package.json
COPY ../targeting/package*.json ./

# Instala las dependencias del proyecto
RUN npm install
RUN npm install prisma --save-dev

# Copia el resto de los archivos del proyecto al contenedor


COPY ../../targeting .
#COPY . .

# Ejecuta los comandos de Prisma dentro del contenedor
RUN npx prisma init --skip-generation
RUN npx prisma generate

# Expone el puerto necesario para acceder a la aplicación (si es necesario)
EXPOSE 4466

# Inicia la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]
