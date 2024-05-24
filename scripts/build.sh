#!/bin/bash
set -e

yarn -s clean

# Compile the configuration file
bash "./scripts/build_config.sh"

# Build the site
yarn -s next build
