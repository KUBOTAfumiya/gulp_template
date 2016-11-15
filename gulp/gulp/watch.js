const gulp = require('gulp');
const ms = require('merge-stream');
const convertEncoding = require('gulp-convert-encoding');

gulp.task('watch', () => {
  const copyWatches = [];
  if (__CONFIG.path.watch) {
    __CONFIG.path.watch.forEach((src) => { copyWatches.push(src.from); });
    gulp.watch(copyWatches, ['watchcopy']);
  }
});

gulp.task('watchcopy', () => {
  const files = __CONFIG.path.watch;
  const stream = ms();
  files.forEach((file) => {
    stream.add(gulp.src(file.from)
    .pipe(convertEncoding({from: 'shift-jis', to: 'utf-8'}))
    .pipe(gulp.dest(file.to)));
  });
  return stream;
});
