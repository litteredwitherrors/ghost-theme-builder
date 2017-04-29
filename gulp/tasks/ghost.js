var gulp = require('gulp');
var ghost = require('ghost');
var path = require('path');
var runSequence = require('run-sequence');

var g;

//STARTS GHOST SERVER
gulp.task('ghost:start', (callback) => {
  runSequence(
    'sass:css',
     () => {
      g = ghost({
        config: path.join(__dirname, '../ghost-dev-config.js')
      });

      g.then((ghostServer) => {
        ghostServer.start().then(() => {
          runSequence('browser-sync');
        });
      });

      callback();
    }
  );
});

//RESTARTS GHOST SERVER
gulp.task('ghost:restart', (callback) => {
  g.then((ghostServer) => {
    ghostServer.stop().then((ghostServer) => {
      ghostServer.start();
    });
  });

  callback();
});
