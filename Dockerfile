# Set base image to alpine
FROM node:18.12.1-alpine

# Install Node.js and NPM
RUN apk add --no-cache nodejs npm

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./ ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build Arguments
ARG DATABASE_URL 

# Set environment variables
ENV DATABASE_URL=${DATABASE_URL}
ENV PORT=3131



# Install Prisma CLI
#RUN npm install -g prisma

# Generate Prisma client
#RUN npx prisma generate

# Run Prisma migrations
#RUN npx prisma migrate deploy

EXPOSE $PORT

HEALTHCHECK CMD curl --fail http://localhost:3131 || exit 1 
CMD ["npm", "start", "--port", "$PORT"]
