// -----------------------------------------------------
// Plugin
// -----------------------------------------------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer');
const { watch } = require('gulp');//4系はこれが必要

// -----------------------------------------------------
// 手順
// -----------------------------------------------------
// sassファイルの各ファイルをstyle.scssへ一括import
// style.scssをcssファイルへコンパイル
// コンパイルしたcssファイルをindex.htmlで読み込み

/* sass */
// 実行コマンド：gulp sass
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')//コンパイル前:scssフォルダ直下
    .pipe(sassGlob())//追加
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'expanded' }))//コンパイル後の見た目を綺麗にする
    .pipe(gulp.dest('./css/'));//コンパイル後
});

/* prefix */
// 実行コマンド：gulp prefix
gulp.task("prefix", function () {
  return gulp.src('./css/*.css')//変更前のディレクトリはcss直下フォルダ全て
    .pipe(autoprefixer({
      // IE11以上、Androidは5以上
      "overrideBrowserslist": ["last 2 versions", "ie >= 11", "Android >= 5"],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/'))//distディレクトリに吐き出し
});

// -----------------------------------------------------
// watchで監視
// -----------------------------------------------------
gulp.task('watch', () => {
  watch('./scss/**/*.scss', gulp.series('sass')),//ccssフォルダに変更があったらタスクの実行
    //watch('./dist/*.css', gulp.series('sass'));
    watch('./css/**/*.css', gulp.series('prefix'));
  //watch('./dist/*.css', gulp.series('prefix'));
});

// scss直下フォルダに変更があったらタスクの実行
