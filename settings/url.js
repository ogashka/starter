const urlSrc = "./app";
const urlDest = "./dist";

export default {
    ready: urlDest,
    html: {
        src: urlSrc + "/html/*.html",
        watch: urlSrc + "/html/**/*.html",
        dest: urlDest
    },
    css: {
        src: urlSrc + "/css/*.css",
        watch: urlSrc + "/css/**/*.css",
        dest: urlDest + "/css"
    },
    pug: {
        src: urlSrc + "/pug/*.pug",
        watch: urlSrc + "/pug/**/*.pug",
        dest: urlDest
    },
    scss: {
        src: urlSrc + "/scss/*.{sass,scss}",
        watch: urlSrc + "/scss/**/*.{sass,scss}",
        dest: urlDest + "/css"
    },
    font: {
        src: urlSrc + "/font/*.{ttf,eot,otf,woff,woff2,svg}",
        watch: urlSrc + "/font/**/*.{ttf,eot,otf,woff,woff2,svg}",
        dest: urlDest + "/font"
    },
    img: {
        src: urlSrc + "/image/*.{png,jpeg,jpg,gif,webp,svg}",
        watch: urlSrc + "/image/**/*.{png,jpeg,jpg,gif,webp,svg}",
        dest: urlDest + "/image"
    },
    js: {
        src: urlSrc + "/js/*.js",
        watch: urlSrc + "/js/**/*.js",
        dest: urlDest + "/js"
    }
}