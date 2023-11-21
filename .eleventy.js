const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("CNAME");

    // Copy README.md to index.md before the build
    eleventyConfig.on('beforeBuild', () => {
        console.log("before");
        const readmePath = path.join(__dirname, 'README.md');
        const indexPath = path.join(__dirname, 'index.md');

        if (fs.existsSync(readmePath)) {
            fs.copyFileSync(readmePath, indexPath);
        }
    });
    
    // Treat README.md as the index page
    eleventyConfig.addCollection("homepage", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./README.md").map(item => {
            item.url = "/";  // Set the URL to the site root
            return item;
        });
    });

    eleventyConfig.setUseGitIgnore(false);

    return {
        dir: {
            input: ".",
        }
    };
};


