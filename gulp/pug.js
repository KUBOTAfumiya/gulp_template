const gulp = require('gulp');
var pug = require('gulp-pug');
// var data = require('gulp-data');
var fm = require('gulp-front-matter');

gulp.task('pug', () => {
  gulp.src(__CONFIG.path.pug.src)
  .pipe(fm({
      property: 'data',
      remove: true
    }))
  .pipe(pug({pretty: true, locals: fm.data}))
  .pipe(gulp.dest(__CONFIG.path.pug.dest));
});
