const { src, dest, watch, series, parallel } = require("gulp");
const html = require("gulp-file-include");

// CONTENT
function compileContent() {
  return src("dev/html/*.html")
    .pipe(
      html({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("dev"));
}
function watchContent() { watch(["dev/html/**/*.html", "dev/html/*.html"], compileContent); }

  exports.default = parallel(
    compileContent,
    watchContent
  );