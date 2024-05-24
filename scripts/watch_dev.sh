#!/bin/bash
set -e

# Compiles next.config.ts into next.config.mjs
watch_config="bash ./scripts/watch_config.sh"

# Restarts the Next.js dev server when configuration changes
watch_next="nodemon --watch ./next.config.mjs --exec 'yarn -s next dev -H 127.0.0.1' --ext 'mjs'"

# Runs the commands concurrently
concurrently "$watch_config" "$watch_next"
