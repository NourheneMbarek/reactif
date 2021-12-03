FROM node:14-alpine as build-step
RUN mkdir -p /app
WORKDIR    /app
ADD package.json ./

RUN npm run dev
ADD . ./

EXPOSE 3000
CMD ["npm","start"]