#!/bin/bash

ssh playspace -C 'mkdir -p ~/sites/seanseefried.com/public/law-prog/solutions'

for i in cheat.html index.html lib.js index.css token.js slideshow.html \
         slideshow.md token.html solutions/token.js; do
  scp $i "playspace:~/sites/seanseefried.com/public/law-prog/$i"
done
