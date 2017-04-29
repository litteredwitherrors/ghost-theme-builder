var gulp = require('gulp');
var del = require('del');

//Builds handlebars
gulp.task('handlebars', ['clean:hbs'], () => {
  return gulp.src(['./src/**/*.hbs'])
  .pipe(gulp.dest('./public/'));
});

gulp.task('clean:hbs', () => {
  return del(['./public/**/*.hbs']);
});
