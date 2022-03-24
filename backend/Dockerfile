FROM node:14.14.0-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
RUN npx prisma migrate dev --name init

COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]