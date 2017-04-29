var gulp = require('gulp');
var runSequence = require('run-sequence');

//Builds and starts browserSync Server
gulp.task('build', function(callback) {
  runSequence(
    'symlink',
    'images',
    'handlebars',
    'js',
    'fonts',
    'ghost:start',
    function() {
      gulp.watch('./src/**/*.hbs', ['handlebars', 'ghost:restart', 'browser-sync:reload']);
      gulp.watch('./src/sass/**/*.scss', ['sass', 'browser-sync:reload']);
      gulp.watch('./src/js/**/*.js', ['js', 'browser-sync:reload']);

      return callback;
    }
  );
});
