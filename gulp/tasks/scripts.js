var gulp = require('gulp');
var include = require('gulp-include');

//Builds scripts
gulp.task('js', () => {
  return gulp.src('./src/js/**/*.js')
  .pipe(include({
    includePaths: [
      "../node_modules/analytics-platform-components/public/ap-components.min.js"
    ]
  }))
  .pipe(gulp.dest('./public/assets/js'));
});
