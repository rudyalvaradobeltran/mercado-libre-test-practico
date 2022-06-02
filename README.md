# Mercado Libre Test Práctico

Este proyecto fue realizado como prueba técnica para la postulación al cargo de frontend developer en Mercado Libre.  
Para ello se utilizó React, Next.js, Material UI, Redux Toolkit y Express.


## Instalación dev

En el directorio principal del proyecto debemos correr el comando:

### `npm install`

Una vez instalado podemos echar a andar el proyecto con el comando:

### `npm run dev`

El proyecto se ejecutará en el puerto 3000 que es el puerto por defecto. El puerto se puede configurar en el archivo .env.local.


## Instalación dev con Docker Compose

Requisitos: Docker y Docker Compose.  
En el directorio principal del proyecto debemos correr el comando de Docker compose:

### `docker-compose --env-file .env.local up -d`

La imagen y el contenedor serán creados y el proyecto estará disponible en el puerto establecido en el archivo .env.local.


## Deployment

https://mercado-libre-ralvarado.vercel.app