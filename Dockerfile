# Usa una imagen base de Node.js
FROM node:14-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Compila y construye la aplicaci�n
RUN npm run build

# Expone el puerto 3000 para acceder a la aplicaci�n
EXPOSE 3000

# Comando para iniciar la aplicaci�n cuando se ejecute el contenedor
CMD [ "npm", "start" ]
