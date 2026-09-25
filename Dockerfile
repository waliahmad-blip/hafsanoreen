# HAFFU STUDIO — Backend Dockerfile
# Multi-stage build: Next.js static export (web/out) + Node.js API on Cloud Run
FROM node:18-alpine AS webbuilder
WORKDIR /web
COPY web/package*.json ./
RUN npm ci
COPY web/ .
RUN npm run build

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine
WORKDIR /app
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -G nodejs
COPY --from=builder /app/node_modules ./node_modules
COPY src/ ./src/
COPY package.json ./
# The Next.js static export — served by Express as the live site
COPY --from=webbuilder /web/out ./web/out
USER nodejs
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "src/server.js"]
