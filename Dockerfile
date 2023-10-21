# Set base image to alpine
FROM node:18-alpine AS builder
RUN apk add --update nodejs npm

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./ ./
COPY prisma ./prisma/

# Install dependencies
#RUN npm install @nestjs/core
RUN yarn install --legacy-peer-deps
# Copy source code
COPY . .

RUN yarn build

# Build Arguments
ARG DATA_URI 

# Set environment variables
ENV DATA_URI=${DATA_URI}
ENV PORT=3131

#COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package*.json ./
#COPY --from=builder /app/dist ./dist

# Install Prisma CLI
#RUN npm install -g prisma

# Generate Prisma client
#RUN npx prisma generate

# Run Prisma migrations
#RUN npx prisma migrate deploy

EXPOSE 3131

HEALTHCHECK CMD curl --fail http://localhost:3131 || exit 1 
CMD ["yarn", "run", "prod"]

