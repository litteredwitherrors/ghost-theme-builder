var gulp = require('gulp');
var symlink = require('gulp-sym');

gulp.task('symlink', () => {
  return gulp
    .src('public')
    .pipe(symlink('node_modules/ghost/content/themes/lesaca', { force: true }));
});
