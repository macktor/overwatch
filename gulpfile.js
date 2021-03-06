/*******************************************************************************
*                                                                              *
* Author : Marcus Rönnmark                                                        *
* Author URI : http://ronnmark.se                                          *
* Description: Gulp file for Coffeescript projects                                 *
* Version: 1.0                                                                 *
* Plugins used :                                                               *
*                                                                              *
* -  gulp-include                                                              *
* -  gulp-coffee                                                               *
* -  gulp-ugify                                                                *
* -  gulp-shell                                                                *
* -  gulp-notify                                                               *
*                                                                              *
*******************************************************************************/

var gulp      = require("gulp"),
  include     = require("gulp-include"),
  coffee      = require("gulp-coffee"),
  shell       = require("gulp-shell"),
  notify      = require("gulp-notify"),
  concat      = require("gulp-concat"),
  uglify      = require("gulp-uglify");
  sass        = require("gulp-ruby-sass");



/////////////////
// DEVELOPMENT //
/////////////////

gulp.task("scripts", function() {
  return gulp.src("Sources/**/*.coffee")
    .pipe(include())
    .pipe(coffee())
    .pipe(gulp.dest("Resources"))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest("Resources"))
    .pipe(notify({message:"Coffee compiled"}));
});
gulp.task("sass", function() {
  return sass('Sources/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('Resources'))
    .pipe(notify({message:"Sass compiled"}));
});

///////////
// TASKS //
///////////

gulp.task("default", ["scripts", "sass"]);



//////////////
// WATCHERS //
//////////////

gulp.task("watch", function() {
  console.log("-- GULP IS WATCHING");
  gulp.watch(["Sources/**/*.coffee"], ["scripts"]);
  gulp.watch(["Sources>/*.scss"], ["sass"]);
});
