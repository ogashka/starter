// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSycn from "browser-sync";

// Url include
import url from "./settings/url.js";

// Option include
import option from "./settings/option.js";

// Clear task
import clear from "./task/clear.js";

// Pug task
import pug from "./task/pug.js";

// Scss task
import scss from "./task/scss.js";

// Image task
import image from "./task/image.js";

// Font task
import font from "./task/font.js";

// Js task
import script from "./task/script.js";

// Watching include
const watching = () => {
    gulp.watch(url.pug.watch, pug);
    gulp.watch(url.scss.watch, scss);
    gulp.watch(url.img.watch, image);
    gulp.watch(url.font.watch, font);
    gulp.watch(url.js.watch, script);
}

// server
const server = () => {
    browserSycn.init({
        server: {
            baseDir: url.ready
        }
    })
}

// Font awesome
const fontwesome = () =>{
    return gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/*.{ttf,woff2}")
    .pipe(gulp.dest(url.ready + "/font"))
}

// Build commond
const build = gulp.series(
    clear,
    gulp.parallel(pug,scss,image,font,fontwesome,script)
);

// Develop
const develop = gulp.series(
    build,
    gulp.parallel(watching,server)
)

// Default command
export default option.isP
    ? build
    : develop;