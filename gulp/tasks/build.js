var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var del = require('del');
var include = require('gulp-include');

//Builds Images
gulp.task('images', function() {
  return gulp.src('./src/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
  .pipe(imagemin()) //compress images
  .pipe(gulp.dest('./public/assets/img'));
});

gulp.task('clean:hbs', function() {
  return del(['./public/**/*.hbs']);
});

//Builds handlebars
gulp.task('handlebars', ['clean:hbs'], function() {
  return gulp.src(['./src/**/*.hbs'])
  .pipe(gulp.dest('./public/'));
});

//Builds scripts
gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
  .pipe(include({
    includePaths: [
      "../node_modules/analytics-platform-components/public/ap-components.min.js"
    ]
  }))
  .pipe(gulp.dest('./public/assets/js'));
});

//Builds fonts
gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('./public/assets/css/fonts'));
});

gulp.task('build:production', function(callback) {
  runSequence(
    'build:ap',
    'images',
    'handlebars',
    'js',
    'fonts',
    'sass:production',
    callback);
});
