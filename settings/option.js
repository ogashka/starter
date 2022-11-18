const isP = process.argv.includes("--production");
const isD = !isP;

export default {
    isP: isP,
    isD: isD,
    htmlmin: {
        collapseWhitespace: isP
    },
    imageMin: {
        verbose: isP
    },
    fonter: {
        formats: ["eot","woff","ttf"]
    }
}