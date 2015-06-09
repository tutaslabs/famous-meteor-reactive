#!/bin/sh
# make sure you have nodejs and npm installed
# the following only needs to be done once

#$ sudo npm install -g browserify
#$ sudo npm install -g uglifyjs


mkdir temp
cd temp
git clone https://github.com/Famous/engine.git
cd engine

npm install uglifyify
npm install glslify

browserify index.js -s famous -g uglifyify | uglifyjs -m -c dead_code,sequences,conditionals,booleans,unused,if_return,join_vars,drop_debugger >bundle.js

cp ../../src/bundle.js ../../src/bundleOLD.js
cp bundle.js ../../src/bundle.js
cd ../..
rm -rf temp




