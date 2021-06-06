module.exports = function () {        /* минификация изображений */
  $.gulp.task('images', function () {
    return $.gulp.src('dist/images/**/*.{png,jpg,svg}')
        .pipe($.gp.imagemin([
          $.gp.imagemin.mozjpeg({progressive: true}),  /* замена здесь */
          $.imageminJpegRecompress({
            loops: 5,
            min: 65,
            max: 70,
            quality: 'medium'
          }),
          $.gp.imagemin.optipng({optimizationLevel: 3}),
          // $.pngquant({quality: '65-70', speed: 5}),  
          $.pngquant({
            quality: [0.65, 0.70],            /* стало так */
            speed: 4,
          }),
          $.gp.imagemin.svgo()
        ]))
        .pipe($.gulp.dest('dist/images'));
  });
};