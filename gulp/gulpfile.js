const gulp = require('gulp');
const runSequence = require('run-sequence');
const tasks = require('./gulp/load');
global.__CONFIG = tasks.config;
global.__IS_PRODUCTION = false;
global.$ = tasks.plugins;


gulp.task('build', (callback) => {
  return runSequence(['copy', 'pug', 'script'], callback);
  // return runSequence(['copy', 'pug'], callback);
});

gulp.task('dist', (callback) => {
  global.__IS_PRODUCTION = true;
  return runSequence('build', callback);
});

gulp.task('default', ['clean'], () => {
  return runSequence('build', 'server', 'watch');
});
