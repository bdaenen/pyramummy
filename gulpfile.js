(function() {
  'use strict';

  var gulp = require('gulp');
  var rename = require('gulp-rename');
  var inline = require('gulp-inline-source');
  var htmlmin = require('gulp-htmlmin');
  var less = require('gulp-less');
  var zlib = require('zlib');
  var fs = require('fs');

  /**
   *
   */
  gulp.task('watch', ['gzip'], function() {
    gulp.watch(__dirname + '/src/**/*.less', ['gzip']);
    gulp.watch(__dirname + '/src/**/*.js', ['gzip']);
    gulp.watch(__dirname + '/src/**/*.html', ['gzip']);
    gulp.watch(__dirname + '/src/assets/**', ['gzip']);
  });

  /**
   *
   */
  gulp.task('css', function(done){
    return gulp.src(__dirname + '/src/**/*.less')
      .pipe(less().on('error', handleError))
      .pipe(gulp.dest(function(file){
        return file.base;
      }));
  });

  /**
   *
   */
  gulp.task('html', ['css'], function (done) {
    return gulp.src('./src/index.html')
      .pipe(inline({compress:true}))
      //.pipe(inline({compress:false}))
      .pipe(htmlmin({
        collapseWhitespace: true,
        //minifyCSS: false,
        minifyCSS: true,
        //minifyJS: false
        minifyJS: true
      }))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest(__dirname + '/build'));
  });

  gulp.task('assets', function(){
    return gulp.src('./src/assets/**')
      .pipe(gulp.dest(__dirname + '/build/assets'))
  });

  gulp.task('gzip', ['html', 'assets'], function(done){
    var src = fs.readFileSync('./build/index.min.html');
    var template = fs.readFileSync('./src/index_compressed_template.html', 'utf8');
    var data = zlib.gzipSync(src, {
      level: 9,
      windowBits: 15
    });
    data = data.toString('base64');
    fs.writeFileSync('./build/index.gzip.html', template.replace('{$BUFFER}', data).replace('{$BUFFER_SIZE}', src.length));
    return done();
  });

  gulp.task('build', ['gzip']);

  /**
   * @param err
   */
  function handleError(err) {
    var gutil = require('gulp-util');

    gutil.log(gutil.colors.red(err));
    this.emit('end');
  }

}());
