const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../gulpconfig');

const run = require('gulp-run');

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
