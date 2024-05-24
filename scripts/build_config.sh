#!/bin/bash
set -e

# Inspiration: https://github.com/vercel/next.js/issues/5318

esbuild "./next.config.ts" \
    --bundle \
    --external:"./node_modules/*" \
    --format="esm" \
    --minify \
    --outfile="./next.config.mjs" \
    --platform="node" \
    --target="es2020"
