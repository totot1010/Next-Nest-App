FROM positivly/prisma-binaries:latest as prisma
FROM node:16.13.2-alpine

RUN apk add --no-cache libc6-compat openssl bash
RUN npm i -g @nestjs/cli
WORKDIR /api
COPY ./backend/package*.json ./
RUN npm install
COPY . . 
CMD ["npm", "run", "start:dev"]

ENV PRISMA_QUERY_ENGINE_BINARY=/prisma-engines/query-engine \
  PRISMA_MIGRATION_ENGINE_BINARY=/prisma-engines/migration-engine \
  PRISMA_INTROSPECTION_ENGINE_BINARY=/prisma-engines/introspection-engine \
  PRISMA_FMT_BINARY=/prisma-engines/prisma-fmt \
  PRISMA_CLI_QUERY_ENGINE_TYPE=binary \
  PRISMA_CLIENT_ENGINE_TYPE=binary
COPY --from=prisma /prisma-engines/query-engine /prisma-engines/migration-engine /prisma-engines/introspection-engine /prisma-engines/prisma-fmt /prisma-engines/