'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');


// SASS tasks
gulp.task('sass', function () {
  return gulp.src('./Sass/src/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./Sass/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./Sass/src/*.scss', ['sass']);
});


// Stylus tasks
gulp.task('stylus', function () {
  return gulp.src('./Stylus/src/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./Stylus/dist'));
});

gulp.task('stylus:watch', function () {
  gulp.watch('./Stylus/src/*.styl', ['stylus']);
});