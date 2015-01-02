var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('build-css', function(){
    return  gulp.src('src/css/*.less').
                pipe(less()).
                pipe(autoprefixer(autoprefixer(
                    {
                        browsers: ['> 1%', 'Firefox > 1', 'Chrome > 1'],
                        cascade: true
                    }
                ))).
                pipe(gulp.dest('build/css'))
});

gulp.task('build-html', function(){
    return gulp.src('src/*.html').
            pipe(gulp.dest('build/'))
});


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(['src/css/*.less', 'src/*.html'], ['build-html', 'build-css']).on('change', livereload.changed);
});