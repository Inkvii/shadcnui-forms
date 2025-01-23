#!/bin/bash

# Copies all necessary files in order to create truly standalone server with packages. Uses nextjs.config.js's output of
# type "standalone" which packs all necessary node_modules together. If standalone type is not used when building the
# app, target server (where this will be running) will have to contain all `node_modules` which has 300MB+.
#
# Client stuff is supposed to be handled by CDN so that is the reason why some folders from build are seemingly missing.
#
# Server is run by running  `node .next/standalone/server.js`
# For more info see - https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files

# Make sure that we are in folder where script is
cd $(dirname $0) || { echo "Cannot change directory to folder where this script is located at"; exit 10; }

# go to root folder
cd ./.. || { echo "Cannot go to parent directory"; exit 1; }

# copy public folder with images, svg and other stuff to standalone folder
cp -r public ./.next/standalone || { echo "Public folder could not be copied to standalone folder"; exit 1; }

# copy
mkdir -p ./.next/standalone/.next/static
cp -r ./.next/static ./.next/standalone/.next || { echo "Built static folder could not be copied to standalone folder"; exit 1; }
