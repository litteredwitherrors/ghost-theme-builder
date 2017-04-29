var gulp = require('gulp');

//Builds fonts
gulp.task('fonts', () => {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('./public/assets/css/fonts'));
});
