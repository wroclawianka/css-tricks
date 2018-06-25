// instruction how to install guulp in video 13.
// and automaticaly run autoprefixer!

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function() {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch',function() {
  gulp.watch('css/styles.css', ['styles']);
});
