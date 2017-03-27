var replace = require('gulp-replace');
var gulpif = require('gulp-if');

function buildLib(gulp, config, fns) {
  return fns
  /*在非压缩下 替换 .min 已达到加载未压缩的lib*/
    .prevBuild(gulp.src(config.lib.input).pipe(gulpif(!config.isCompress, replace(/\.min/g, ''))))
    .pipe(gulp.dest(function (fs) {
      var directory = fs.base.replace(/\\/g, '/');
      var prevLast = directory.lastIndexOf('/', directory.length - 2);
      return config.output + directory.substring(prevLast + 1);
    }));
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
