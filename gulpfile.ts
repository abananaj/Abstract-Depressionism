const { src, dest, watch, series, parallel } = require("gulp");
const html = require("gulp-file-include");

// CONTENT
function compileContent() {
  return src("dev/content/*.html")
    .pipe(
      html({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dev"));
}
function watchContent() { watch(["dev/content/**/*.html", "dev/content/*.html"], compileContent); }

  exports.default = parallel(
    compileContent,
    watchContent
  );