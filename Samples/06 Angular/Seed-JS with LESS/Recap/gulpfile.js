var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function () {
    gulp.src(['app/*Spec.js', "lib/*Spec.js"])
        .pipe(minify())
        .pipe(gulp.dest("build"));
});
