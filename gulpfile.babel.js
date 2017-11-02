import path from 'path';
import fs from 'fs';
import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import del from 'del';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import htmlreplace from 'gulp-html-replace';
import webpackConfig from './webpack.config.dist.babel';

gulp.task('clean', () =>
  del.sync(['./dist/**']),
);

gulp.task('webpack:build', (cb) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({
      colors: true,
    }));
    cb(null);
  });
});

gulp.task('sass:watch', () =>
  gulp.watch('./src/assets/sass/*.scss', ['sass']),
);

gulp.task('sass:video', (cb) => {
  gulp.src(['./src/assets/video.scss'])
  .pipe(sass({ includePaths: ['bower_components', 'node_modules'], errLogToConsole: true }))
  .pipe(gulp.dest('./dist/static'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./dist/static'));
  cb(null);
});

gulp.task('sass:main', (cb) => {
  gulp.src(['./src/assets/main.scss'])
    .pipe(sass({ includePaths: ['bower_components', 'node_modules'], errLogToConsole: true }))
    .pipe(gulp.dest('./dist/static'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./dist/static'));
  cb(null);
});

gulp.task('static', (cb) => {
  gulp.src('./src/assets/images/head.jpg')
    .pipe(gulp.dest('./dist/static/images'));
  gulp.src('./src/assets/fonts/*.*')
    .pipe(gulp.dest('./dist/static/fonts'));
  gulp.src(['./src/assets/bootstrap.min.css'])
    .pipe(gulp.dest('./dist/static'));
  cb(null);
});

gulp.task('build', ['webpack:build', 'sass:video', 'sass:main', 'static'], (cb) => {
  del(['./dist/static/video.css', './dist/static/main.css']);
  cb(null);
});

gulp.task('html', ['build'], () => {
  const fileContent = fs.readFileSync(path.join(__dirname, './dist/assets-map.json'));
  const assetsJson = JSON.parse(fileContent);
  gulp.src('./src/index.html')
    .pipe(htmlreplace({
      js: [`./static/${assetsJson.vendor.js}`, `./static/${assetsJson.main.js}`],
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean', 'build', 'html']);
