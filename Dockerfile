FROM node:18.4.0-alpine as builder

WORKDIR /app 

COPY . . 
RUN npm install --legacy-peer-deps && npm run build 

FROM nginx:1.21.6-alpine

COPY --from=builder /app/dist/index.html /usr/share/nginx/html/
COPY --from=builder /app/dist/assets /usr/share/nginx/html/assets
COPY --from=builder /app/V3.5.gltf /usr/share/nginx/html/V3.5.gltf