#!/bin/sh
cd ../
mkdir -p output
cp -Ra ./dnd-12th-8-frontend/* ./output
find ./dnd-12th-8-frontend -name ".*" -type f -exec cp --parents {} ./output \;
find ./dnd-12th-8-frontend -name ".*" -type d -exec cp -R {} ./output \;