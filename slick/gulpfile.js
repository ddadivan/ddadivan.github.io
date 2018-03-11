var gulp = require("gulp");

var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var moreCSS = require("gulp-more-css");
var cssnano = require("gulp-cssnano");

gulp.task("sass", function() {
  return gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function() {
  return gulp.src("src/js/*.js")
    .pipe(rename("app.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch", function() {
  gulp.watch("src/js/*.js", ["scripts"]);
  gulp.watch("src/scss/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "scripts", "watch"]);