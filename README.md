# Static Page Template With Gulp, Sass, Jquery and Bootstrap

Setup information.
------------------
* Make sure you have nodejs and npm installed

* run this to install gulp and it's plugins
> $ npm install

* If using git:
* add this line to ./git/info/exclude file to keep the node modules out of the git repository
> /node_modules/*

* run gulp default task by running
> $ gulp

* compile sass by running
> $ gulp sass

* bundle js files by running
> $ gulp concatJS

The default task will automatically watch html, scss and js files,
compile them and refresh the browser on changes.
You don't really need to run the "sass" or "concatJS" tasks unless
you altered the source files without gulp running or pulled new
files.  

Project structure.
------------------

.
|
---public
> server home folder, create and edit your html files here  

.
|
---source
> source code folder for **SCSS** and **JS** files.
> styles.scss serves as an aggregation file only.
> add new scss files to the apropriate folder and import them there.
> they will be compiled and merged into the styles.css file
> that lives in /public/assets/css

Gulp plugins used.
------------------
**browser-sync**

> Refreshes browser on file changes

**gulp-autoprefixer**

> Parses CSS and add vendor prefixes to rules

**gulp-concat**

> Merges all js files into bundle.js

**gulp-sass**

> Compiles sass into css and merges them into styles.css
