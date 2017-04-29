var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../gulpconfig');
var run = require('gulp-run');

gulp.task('sass:css', () => {                                                   //Sass to CSS task
  return gulp.src(config.paths.src + 'scss/app.scss')
  .pipe(sourcemaps.init())                                                      //Start sourcemaps
  .pipe(plumber({                                                               // Error handler
    errorHandler: (err) => {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(sass())
  .pipe(sourcemaps.write())                                                     //Write sourcemaps
  .pipe(gulp.dest(config.paths.public + '/css'));
});
