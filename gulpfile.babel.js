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

gulp.task('webpack:build', () => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({
      colors: true,
    }));
  });
});

gulp.task('sass:watch', () =>
  gulp.watch('./src/assets/sass/*.scss', ['sass']),
);

gulp.task('sass:video', () =>
  gulp.src(['./src/assets/video.scss'])
  .pipe(sass({ includePaths: ['bower_components', 'node_modules'], errLogToConsole: true }))
  .pipe(gulp.dest('./dist/static'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./dist/static')),
);

gulp.task('sass:main', () =>
  gulp.src(['./src/assets/main.scss'])
  .pipe(sass({ includePaths: ['bower_components', 'node_modules'], errLogToConsole: true }))
  .pipe(gulp.dest('./dist/static'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('./dist/static')),
);

gulp.task('static', () => {
  gulp.src('./src/assets/images/head.jpg')
    .pipe(gulp.dest('./dist/static/images'));
  gulp.src('./src/assets/fonts/*.*')
    .pipe(gulp.dest('./dist/static/fonts'));
  gulp.src(['./src/assets/bootstrap.min.css'])
    .pipe(gulp.dest('./dist/static'));
  gulp.src(['./src/video.mp4', './src/favicon.ico'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('html', () =>
  gulp.src('./src/index.html')
    .pipe(htmlreplace({
      js: ['./static/vendor.js', './static/main.js'],
    }))
    .pipe(gulp.dest('./dist')),
);

gulp.task('build', ['webpack:build', 'sass:video', 'sass:main', 'static', 'html'], () =>
  del(['./dist/static/video.css', './dist/static/main.css']),
);

gulp.task('default', ['clean', 'build']);
