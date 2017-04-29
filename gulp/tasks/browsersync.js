var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function (callback) {
  browserSync.init({
    proxy: 'localhost:2368'
  });
  callback();
});

gulp.task('browser-sync:reload', function (callback) {
  browserSync.reload();
  callback();
});
