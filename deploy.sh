#!/bin/bash

SOURCE_INDEX_PAGE="index.html"
DESTINATION_INDEX_PAGE="index.hbs"

echo "------------------------------------------------------"
echo "BUILDING FRONT END DEPENDENCIES"
echo "------------------------------------------------------"

# Clean previous build folder
echo "Cleaning previous build folder..."
rm -rf MyTOI/build

# enter into front end project dir
cd MyTOI

# Packaging front end code
echo "Packaging using webpack..."
webpack -p

# Replacing bundle.js referece with javascripts/bundle.js and appending it to handlerbar index page 
echo "Replacing dependencies references..."
cd build
sed -e 's/bundle.js/javascripts\/bundle.js/g' $SOURCE_INDEX_PAGE > $DESTINATION_INDEX_PAGE

echo "------------------------------------------------------"
echo "MOVING DEPENDENCIES TO BACKEND"
echo "------------------------------------------------------"

# Cleaning dependencies
rm ../../MyTOI-backend/views/index.hbs
rm ../../MyTOI-backend/public/javascripts/bundle.js

# Moving index.hbs
cp index.hbs ../../MyTOI-backend/views/

# Moving bundle file
cp bundle.js ../../MyTOI-backend/public/javascripts

