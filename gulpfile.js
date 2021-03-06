var gulp = require("gulp"),
    coffee = require("gulp-coffee"),
    less = require("gulp-less"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps");

var paths = {
  scripts: ["./src/scripts/**/*.coffee", "!./node_modules/**/*.coffee"],
  styles: ["./src/styles/**/*.less", "!./node_modules/**/*.less"]
}

gulp.task("compile-coffee", function(){
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function(f){
      var path = f.base.replace("src\\", "build\\");
      return path;
    }))
});

gulp.task("compile-less", function(){
  return gulp.src(paths.styles)
    .pipe(less())
    .pipe(gulp.dest(function(f){
      var path = f.base.replace("src\\", "build\\");
      return path;
    }))
});

gulp.task("compile", ["compile-coffee", "compile-less"]);
