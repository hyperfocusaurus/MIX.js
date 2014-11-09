var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')
;

gulp.task('build', ['build-javascript', 'sass']);

gulp.task('build-javascript', function () {
  gulp.src('src/main.js')
    .pipe(browserify({
      transform: ['hbsfy'],
      extensions: ['.hbs']
    }))
    .pipe(rename('mix.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('reload', function () {
  gulp.src(['build/*', '*.html'])
    .pipe(connect.reload());
});

gulp.task('watch', ['watch-javascript', 'watch-html', 'watch-sass']);

gulp.task('watch-javascript', function () {
  gulp.watch(['src/*.js','src/**/*.js'], ['build-javascript', 'reload']);
});

gulp.task('watch-html', function () {
  gulp.watch(['*.html', '**/*.html'], ['reload']);
});

gulp.task('watch-sass', function () {
  gulp.watch(['src/styles/*.scss'], ['sass', 'reload']);
});

gulp.task('server', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['build', 'server', 'watch']);
