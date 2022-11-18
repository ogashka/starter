// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSycn from "browser-sync";

// Others plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
import webpack from "webpack-stream";

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Js task
export default () => {
    return gulp.src(url.js.src,{sourcemaps:true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack({
        mode: option.isP ? "production" : "development"
    }))
    .pipe(gulp.dest(url.js.dest,{sourcemaps:true}))
    .pipe(browserSycn.stream())
}