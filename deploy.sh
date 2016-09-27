#!/bin/bash

for i in cheat.html index.html lib.js index.css token.js slideshow.html \
         slideshow.md; do
  scp $i 'playspace:~/sites/seanseefried.com/public/law-prog'
done
