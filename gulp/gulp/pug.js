const gulp = require('gulp');
var pug = require('gulp-pug');
 
gulp.task('pug', () => {
  return gulp.src(__CONFIG.path.pug.src)
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest(__CONFIG.path.pug.dest));
});
