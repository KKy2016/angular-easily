var replace = require('gulp-replace');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');

function buildLib(gulp, config, fns) {
  return fns
  /*在非压缩下 替换 .min 已达到加载未压缩的lib*/
    .prevBuild(gulp.src(config.lib.input).pipe(gulpif(!config.isCompress, replace(/\.min/g, ''))))
    .pipe(rename(config.lib.repair))
    .pipe(gulp.dest(config.output));
}
function watchLib(gulp, config, fns) {
  fns.changeEvent(gulp.watch(config.lib.watch, function () {
    buildLib(gulp, config, fns)
      .on('end', function () {
        gulp.start('rev')
      });
  }));
}
module.exports = {
  build: buildLib,
  watch: watchLib
};
