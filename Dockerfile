FROM node:10.16.0-alpine as build
MAINTAINER Sudhir Yadav "yadavsudhir405@gmail.co"
ENV REFRESHED_AT 05-JUN-2019

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
RUN mkdir -p /home/appuser/app
WORKDIR /home/appuser/app

COPY --chown=appuser:appgroup ./package.json /home/appuser/app/package.json
COPY --chown=appuser:appgroup ./package-lock.json /home/appuser/app/package-lock.json
RUN npm install --from-lockfile

COPY --chown=appuser:appgroup ./next.config.js /home/appuser/app/next.config.js
COPY --chown=appuser:appgroup ./polyfills.js /home/appuser/app/polyfills.js
COPY --chown=appuser:appgroup ./server.js /home/appuser/app/server.js
COPY --chown=appuser:appgroup ./src /home/appuser/app/src/
ENV NODE_ENV production
RUN npm run build


EXPOSE 4000
ENTRYPOINT ["npm", "start"]

