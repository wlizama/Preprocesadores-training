'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./Sass/src/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./Sass/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./Sass/src/*.scss', ['sass']);
});