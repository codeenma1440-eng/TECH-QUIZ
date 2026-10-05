FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
RUN node -e "const D=require('better-sqlite3');const r=new D(':memory:').prepare('select 1 x').get();if(r.x!==1)process.exit(1)"
COPY . .
RUN mkdir -p /data/uploads
ENV NODE_ENV=production PORT=3000 DB_FILE=/data/quiz.db UPLOAD_DIR=/data/uploads
EXPOSE 3000
CMD ["node","server.js"]
