const path = require("path");
const rootPath = path.resolve(__dirname, "../..");
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

exports.srcPath = resolveFromRootPath("src");
exports.buildPath = resolveFromRootPath("build");
exports.assetsPath = resolveFromRootPath("src", "assets");
