'use strict';

const fileSystem = require('fs');
const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const friendlyFormatter = require('eslint-friendly-formatter');
const argv = require('yargs').argv;
const http = require('http');


// Global gulp config
const config = {
  productionUrl: './public/',
  devUrl: './dev/',
};

const globalFunctions = {
  watcher() {
    gulp.watch('./dev/less/**/*.less', ['less']);
    gulp.watch('./dev/scripts/**/*.js', ['scripts']);
    gulp.watch('./dev/scripts/**/*.jsx', ['scripts']);
    gulp.watch('./dev/**/*.html', ['html']);

    // activate eslint if required
    if (argv.c === 'uselint') {
      this.lint();
    }
  },
  lint() {
    return gulp.src([`${config.devUrl}scripts/**/*`, '!node_modules/**'])
      .pipe(eslint('.eslintrc'))
      .pipe(eslint.format(friendlyFormatter));
  },
};

// Tasks

gulp.task('lint', () => {
  globalFunctions.lint();
});

gulp.task('scripts', () => {
  gulp.src(`${config.devUrl}scripts/`)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(`${config.productionUrl}js`));
});

gulp.task('less', () => {
  gulp.src(`${config.devUrl}less/`)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(`${config.productionUrl}js`));
});

gulp.task('html', () => {
  gulp.src(`${config.devUrl}**/*.html`)
    .pipe(gulp.dest(config.productionUrl));
});

/* TODO: Gulp Build task
gulp.task('build', () => {});
*/

gulp.task('build', () => {
  /* TODO: Gulp Build task */
});

gulp.task('serverForWatcher', () => {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  }).listen(1337, '127.0.0.1');

  console.log('Server running at http://127.0.0.1:1337/');
});

// Watcher
gulp.task('watch', ['scripts', 'less', 'html'], () => {
  globalFunctions.watcher();
});

// BrowserSync
gulp.task('server', ['watch'], () => {
  browserSync.init({
    server: config.productionUrl,
  });

  // gulp watch
  globalFunctions.watcher();

  // reload browser
  gulp.watch(`${config.productionUrl}**/*.*`).on('change', browserSync.reload);
});

// Defaul
gulp.task('default', ['scripts', 'less', 'html']);


/* +++++++++++++++++++++++++++++++++++++ */

// Task: "gulp createjson"
gulp.task('createjson', () => {
  const filePath = path.join(__dirname, `${config.devUrl}data/city.list.json`);
  const json = [];
  let file = fileSystem.readFileSync(filePath, 'utf-8', (err) => {
    throw err;
  });

  file = file.split('\n');

  for (let i = 0; i < file.length - 1; i++) {
    const currentRow = file[i];
    const tempJson = JSON.parse(currentRow);
    const tempObj = {
      name: tempJson.name,
      country: tempJson.country,
    };

    json.push(tempObj);
  }

  const finalJson = JSON.stringify(json).replace(/\\r/gm, '');
  const outPath = path.join(__dirname, './dev/data/city.list.new.json');

  fileSystem.writeFileSync(outPath, finalJson, 'utf8', (err) => {
    throw err;
  });
});
