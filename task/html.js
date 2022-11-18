// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSycn from "browser-sync";

// Others plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import htmlMin from "gulp-htmlmin";
import fileInclude from "gulp-file-include";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";

// Url include
import url from "../settings/url.js";

// Option include
import option from "../settings/option.js";

// Html task
export default () => {
    return gulp.src(url.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Html",
            message: error.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({
        title: ".html"
    }))
    .pipe(htmlMin(option.htmlmin))
    .pipe(size({
        title: ".html->min"
    }))
    .pipe(gulp.dest(url.html.dest))
    .pipe(browserSycn.stream())
}
