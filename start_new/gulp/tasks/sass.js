module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('app/sass/main.sass')  
        .pipe($.gp.plumber())               
        .pipe($.gp.sourcemaps.init())       
        .pipe($.gp.sass())                  
        .pipe($.gp.autoprefixer({           
          overrideBrowserslist: ['last 2 versions']
        }))
        // .pipe($.gp.csso())                 
        .pipe($.gp.rename('style.css')) 
        .pipe($.gp.sourcemaps.write(''))    
        .pipe($.gulp.dest('dist/css'))     
        .pipe($.browserSync.stream());      
  }); 
}; 