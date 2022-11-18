// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSycn from "browser-sync";

// Others plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import rename from "gulp-rename";
import concat from "gulp-concat";
import cssImport from "gulp-cssimport";
import csso from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import webpCss from "gulp-webp-css";

// Url include
import url from "../settings/url.js";

// Css task
export default () => {
    return gulp.src(url.css.src,{sourcemaps:true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Css",
            message: error.message
        }))
    }))
    .pipe(cssImport())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(webpCss())
    .pipe(concat("main.css"))
    .pipe(gulp.dest(url.css.dest,{sourcemaps:true}))
    .pipe(size({
        title: ".css"
    }))
    .pipe(csso())
    .pipe(rename({
        suffix: ".min"
    }))
    .pipe(size({
        title: "min.css"
    }))
    .pipe(gulp.dest(url.css.dest,{sourcemaps:true}))
    .pipe(browserSycn.stream())
}