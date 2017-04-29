var gulp = require('gulp');
var ghost = require('ghost');
var path = require('path');
var runSequence = require('run-sequence');

var g;

//STARTS GHOST SERVER
gulp.task('ghost:start', function (callback) {
  runSequence(
    'sass:css',
    function () {
      g = ghost({
        config: path.join(__dirname, '../ghost-dev-config.js')
      });

      g.then(function (ghostServer) {
        ghostServer.start().then(function () {
          runSequence('browser-sync');
        });
      });

      callback();
    }
  );
});

//RESTARTS GHOST SERVER
gulp.task('ghost:restart', function (callback) {
  g.then(function (ghostServer) {
    ghostServer.stop().then(function (ghostServer) {
      ghostServer.start();
    });
  });

  callback();
});
