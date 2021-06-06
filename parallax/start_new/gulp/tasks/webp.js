module.exports = function () {                       /* создает формат webp */
  $.gulp.task('webp', function () {
    return $.gulp.src('dist/images/**/*.{png,jpg}')
        .pipe($.gp.webp({quality: 90}))
        .pipe($.gulp.dest('dist/images'));
  });
};