const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack-stream');
const runSequence = require('run-sequence');
const stylelint = require('gulp-stylelint');
const del = require('del');
const path = require('path');
const pngquant = require('imagemin-pngquant');
const webpackDevConfig = require('./webpack.dev.config');

const BUILD_DIR = path.join(__dirname, '/www/assets/');
const BUILD_IMG_DIR = path.join(__dirname, '/www/assets/images');

gulp.task('build-clean', () => {
  return del([BUILD_DIR]);
});

gulp.task('webpack', () => {
  return gulp.src('src/**/*.{js, jsx, css}')
    .pipe($.env.set({
      NODE_ENV: 'dev',
    }))
    .pipe(webpack(webpackDevConfig))
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('eslint', () => {
  return gulp.src(['src/**/*.js'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('stylelint', () => {
  return gulp.src(['src/**/*.css'])
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    }));
});

gulp.task('lint', ['eslint', 'stylelint']);

gulp.task('imgmin', () => {
  return gulp.src(['src/images/*'])
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      use: [pngquant()],
    }))
    .pipe(gulp.dest(BUILD_IMG_DIR));
});

gulp.task('build', () => {
  runSequence(
    'build-clean',
    ['lint', 'imgmin', 'webpack']
  );
});

gulp.task('default', ['build']);
