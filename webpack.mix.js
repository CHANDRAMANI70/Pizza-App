let mix = require('laravel-mix');
//here we are trying to compile the saas and js to the public folder js
//in mix.js we have two parameters first one is the the location of the file that has to be comiled to the other location 
mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss', 'public/css/app.css');