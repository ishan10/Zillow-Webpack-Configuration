# Zillow-Webpack-Configuration

A Webpack boilerplate to handle the following:
 - Javascript/ES6/React with JS and JSX file extensions, to output a single ES5 bundle with unique hash added to the filename.
 - SCSS with .scss files, to output a single CSS with unique hash added to the filename.
 - Images with .jpeg, .jpg, .png, and .gif extensions, to return a link referencing the file.
 - SVG file with .svg extensions, to return a base-64 data-encoded string if the file is less than 1mb and a link to the file otherwise.
 
 To use this repo :
 1) Clone this repository
 2) Install all the dependencies in the package.json file.
 2) Build the webpack using "npm run webpack" command.
 3) Start the local dev server using "npm run start" command.
