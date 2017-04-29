var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('init', ['symlink'], () => {
  return gulp
    .src('node_modules/ghost/core/server/data/schema/default-settings.json', {base : './'})
    .pipe(replace(/casper/g, 'lesaca'))
    .pipe(gulp.dest('./'));
});
