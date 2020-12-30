"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

function makeCss() {
  return gulp
    .src("./styles/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./OhMyFood/styles/css"));
}

function watch() {
  browserSync.init({
    server: "./OhMyFood"
  });
  gulp.watch("./OhMyFood/styles/scss", makeCss);
  gulp.watch("./OhMyFood").on("change", browserSync.reload);
}

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

module.exports.makeCss = makeCss;
module.exports.watch = watch;
