var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');
var webpack = require('webpack-stream');


var tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function() {
  var stream = gulp.src('./src/**/*.ts')
                   .pipe(tsProject())
                   .pipe(gulp.dest('./dist'));
  return stream;
});

gulp.task('webpack', ['tsc'], function () {
  var stream = gulp.src('./dist/**/*.js')
                   .pipe(webpack( require('./webpack.config.js')))
                   .pipe(gulp.dest('./dist'));
  return stream;
});

gulp.task('compile', ['webpack']);
 
gulp.task('watch', ['compile'], function () {
  var stream = nodemon({
                 script: 'dist/', // run ES5 code
                 watch: 'src', // watch ES2015 code
                 tasks: ['compile'] // compile synchronously onChange
               });
 
  return stream;
});