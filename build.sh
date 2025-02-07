#!/bin/sh
cd ../
mkdir output
cp -R ./dnd-12th-8-frontend/. ./output/
cp -Ra ./dnd-12th-8-frontend/.* ./output/ 2>/dev/null || true
cp -R ./output/. ./dnd-12th-8-frontend/
cp -Ra ./output/.* ./dnd-12th-8-frontend/ 2>/dev/null || true