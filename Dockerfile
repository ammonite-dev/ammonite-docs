## build step
FROM node:16-buster as node
WORKDIR app

FROM node as builder

COPY . .

RUN npm install

# We do not need the Rust toolchain to run the binary!
FROM node:16-buster as runtime

WORKDIR app

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE $PORT

COPY --from=builder /app /app

RUN npm run build

ENTRYPOINT ["node", "/app/build"]
