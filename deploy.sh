#!/bin/bash

SOURCE_INDEX_PAGE="index.html"
DESTINATION_INDEX_PAGE="index.hbs"
PROJECT_HOME="/Users/kalpeshadhatrao/Documents/Developments/Project/MyTOI-dev/"

echo "------------------------------------------------------"
echo "CLEANING UP"
echo "------------------------------------------------------"

# Clean previous build folder
echo "Cleaning previous build folder..."
rm -rf $PROJECT_HOME"MyTOI/build"

# Removing existing process 
echo "Killing existing news app process"
pid=$(lsof -i :3000 -t)
if [[ $pid ]]
  then kill -TERM $pid || kill -KILL $pid 
fi

echo "------------------------------------------------------"
echo "BUILDING FRONT END DEPENDENCIES"
echo "------------------------------------------------------"

# enter into front end project dir
cd $PROJECT_HOME"MyTOI"

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

# Moving images
cp *.gif ../../MyTOI-backend/public/javascripts


echo "Moved dependencies successfully"

echo "------------------------------------------------------"
echo "RUNNING THE APPLICATION"
echo "------------------------------------------------------"

cd ../../
nohup iojs MyTOI-backend/bin/www &

sleep 2

echo "Opening application in the browser"
open -a safari http://localhost:3000/
