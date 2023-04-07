FROM node:lts-slim
WORKDIR /app
CMD ["sh", "-c", "npm install && npm run dev"]