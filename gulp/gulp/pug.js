const gulp = require('gulp');
var pug = require('gulp-pug');
var data = require('gulp-data');
var fm = require('front-matter');
var fs = require('fs');
var Q = require('q');
var rename = require('gulp-rename');

var json;

gulp.task('pug', () => {
  readFile().then( () => {
    console.log(json);
    for (var key in json){ 
      gulp.src(__CONFIG.path.pug.src)
      .pipe(pug({pretty: true, locals: {text: json[key]}}))
      .pipe(rename(key+'.html'))
      .pipe(gulp.dest(__CONFIG.path.pug.dest));
    }
  });
});

const readFile = () =>{
  var deferred = Q.defer();
  fs.readFile('../assets/data/pugdata.yml', "utf-8", function(err, data) {
    if (err) throw err
    json = fm(data).attributes;
    deferred.resolve();
  });
  return deferred.promise;
};