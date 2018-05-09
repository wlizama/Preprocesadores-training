'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var less = require('gulp-less');


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


// Less tasks
gulp.task('less', function () {
  return gulp.src('./Less/src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./Less/dist'));
});

gulp.task('less:watch', function () {
  gulp.watch('./Less/src/*.less', ['less']);
});