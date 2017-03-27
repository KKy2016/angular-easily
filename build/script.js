var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var babel = require("gulp-babel");

module.exports = {
  'build': buildScript,
  'watch': watchScript
};
function buildScript(gulp, config, fns) {
  return fns.prevBuild(gulp.src(config.script.input))
    .pipe(babel())
    .pipe(gulpif(config.isCompress, uglify()))
    .pipe(gulp.dest(config.output));
}
function watchScript(gulp, config, fns) {
  fns.changeEvent(gulp.watch(config.script.watch, function () {
    buildScript(gulp, config, fns)
      .on('end', function () {
        gulp.start('rev')
      });
  }));
}
