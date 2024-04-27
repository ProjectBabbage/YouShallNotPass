FROM node:18-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
ENV PORT=3000
EXPOSE 3000
CMD [ "yarn", "start" ]
