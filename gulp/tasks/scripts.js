var gulp = require('gulp');

//Builds scripts
gulp.task('js', () => {
  return gulp.src('./src/js/**/*.js')
  .pipe(gulp.dest('./public/assets/js'));
});
