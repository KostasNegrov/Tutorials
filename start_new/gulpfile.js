global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),  
  browserSync: require('browser-sync').create(), 
  del: require('del'), 
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'),    
    // jquery: './app/libs/jquery/jquery-1.12.0.min.js',     
   
        
    js: './app/js/**/*.js',              
  }
};

$.path.config.forEach(function (path) {   
  require(path)();
});