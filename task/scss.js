// Gulp include
import gulp from "gulp";

// Browser-sync include
import browserSycn from "browser-sync";

// Others plugins
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import rename from "gulp-rename";
import csso from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import mediaGroup from "gulp-group-css-media-queries";
import webpCss from "gulp-webp-css";
import sassGlob from "gulp-sass-glob";
import gulpSass from "gulp-sass";
import nodeSass from "sass";
import sassImporter from "node-sass-tilde-importer";
const sass = gulpSass(nodeSass);

// Url include
import url from "../settings/url.js";

// Scss task
export default () => {
    return gulp.src(url.scss.src,{sourcemaps:true})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Scss",
            message: error.message
        }))
    }))
    .pipe(sassGlob())
    .pipe(sass({
        importer: sassImporter
    }))
    .pipe(mediaGroup())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(webpCss())
    .pipe(gulp.dest(url.scss.dest,{sourcemaps:true}))
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
    .pipe(gulp.dest(url.scss.dest,{sourcemaps:true}))
    .pipe(browserSycn.stream())
}