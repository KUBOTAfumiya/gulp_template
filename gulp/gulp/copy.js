const gulp = require('gulp');
const ms = require('merge-stream');
const convertEncoding = require('gulp-convert-encoding');

gulp.task('copy', () => {
  const files = __CONFIG.path.copy;
  const stream = ms();
  files.forEach((file) => {
    stream.add(gulp.src(file.from)
    .pipe(convertEncoding({from: 'shift-jis', to: 'utf-8'}))
    .pipe(gulp.dest(file.to)));
  });
  return stream;
});

gulp.task('copyimg', () => {
  const files = __CONFIG.path.copyimg;
  const stream = ms();
  files.forEach((file) => {
    stream.add(gulp.src(file.from)
    .pipe(gulp.dest(file.to)));
  });
  return stream;
});
