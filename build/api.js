module.exports = function (gulp, config, fns) {
  return fns.prevBuild(gulp.src(config.api.input))
    .pipe(gulp.dest(function (fs) {
      var directory = fs.base.replace(/\\/g, '/');
      var prevLast = directory.lastIndexOf('/', directory.length - 2);
      return config.output + directory.substring(prevLast + 1);
    }));
};
