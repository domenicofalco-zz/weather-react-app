const jshint = require('gulp-jshint');
const gulp = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

//Global gulp config
const config = {
  productionUrl: './public/',
  devUrl: './dev/',
  watcher(){
    gulp.watch('./dev/less/**/*.less', ['less']);
    gulp.watch('./dev/scripts/**/*.js', ['scripts']);
    gulp.watch('./dev/scripts/**/*.jsx', ['scripts']);
    gulp.watch('./dev/**/*.html', ['html']);
  }
}

// Tasks
gulp.task('scripts', () => {
  gulp.src(`${config.devUrl}scripts/`)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(`${config.productionUrl}js`))
});

gulp.task('less', () => {
  gulp.src(`${config.devUrl}less/`)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(`${config.productionUrl}js`))
});

gulp.task('html', () => {
  gulp.src(`${config.devUrl}**/*.html`)
    .pipe(gulp.dest(config.productionUrl))
});

/* TODO: JShint & Gulp Build task
gulp.task('JShint', () => {});
gulp.task('build', () => {});
*/

// Watcher
gulp.task('watch', ['scripts', 'less', 'html', 'lint'], config.watcher());

// BrowserSync
gulp.task('server', ['scripts', 'less', 'html'], () => {
  browserSync.init({
      server: config.productionUrl
  });

  gulp.watch(`${config.productionUrl}**/*`).on('change', browserSync.reload);
});

// Defaul
gulp.task('default', ['scripts', 'less', 'html']);


/* +++++++++++++++++++++++++++++++++++++ */

// Task: "gulp createjson"
gulp.task('createjson', () => {

    var fileSystem = require('fs')
        , path = require('path')
        , filePath = path.join(__dirname, './dev/data/city.list.json')
        , tempJson = []
        , tempObj = []
        , json = []
        , file = fileSystem.readFileSync(filePath, 'utf-8', function(err) {
            console.log(err);
        });

    file = file.split("\n");

    for(var i = 0; i < file.length-1; i++) {

      var currentRow = file[i];

      tempJson = JSON.parse(currentRow);

      tempObj = {
        name: tempJson.name,
        country: tempJson.country
      };

      json.push(tempObj);
    }

    var finalJson = JSON.stringify(json).replace(/\\r/gm,'')
        , outPath = path.join(__dirname, './dev/data/city.list.new.json');

    fileSystem.writeFileSync(outPath, finalJson, 'utf8', function(err) {
        console.log(err);
    });

});
