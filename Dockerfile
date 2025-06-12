# 1. Use Node base image
FROM node:20

# 2. Set working directory
WORKDIR /src

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Build TypeScript
RUN npm run build

# 7. Expose port
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start", "dev"]
