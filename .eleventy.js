const fs = require('fs');
const path = require('path');
const markdownIt = require("markdown-it");
const md = new markdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("assets/css");

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

    // eleventyConfig.addCollection("nestedPosts", function(collectionApi) {
    //     let nestedPosts = {};
    //     collectionApi.getAll().forEach(item => {
    //         if (item.url !== '/') { // Ignore the homepage
    //             const segments = item.url.split('/').filter(Boolean);
    //             if (segments.length > 1) {
    //                 const [category, page] = segments;
    //                 if (!nestedPosts[category]) {
    //                     nestedPosts[category] = [];
    //                 }
    //                 console.log(item.templateContent);
    //                 nestedPosts[category].push({ title: item.data.title, url: item.url });
    //             }
    //         }
    //     });
    //     return nestedPosts;
    // });

    eleventyConfig.addCollection("nestedPosts", function(collectionApi) {
        let nestedPosts = {};
        collectionApi.getAll().forEach(item => {
            if (item.url !== '/') { // Ignore the homepage
                // Read the content of the file
                let content = fs.readFileSync(item.inputPath, 'utf-8');

                // Extract the title from the first H1 heading
                let title = "Default Title"; // Fallback title
                const tokens = md.parse(content, {});
                for (let token of tokens) {
                    if (token.type === 'heading_open' && token.tag === 'h1') {
                        let titleToken = tokens[tokens.indexOf(token) + 1];
                        if (titleToken && titleToken.type === 'inline') {
                            title = titleToken.content;
                            break;
                        }
                    }
                }

                // Get category from URL
                const segments = item.url.split('/').filter(Boolean);
                if (segments.length > 1) {
                    const category = segments[0];

                    // Initialize category array if not exist
                    if (!nestedPosts[category]) {
                        nestedPosts[category] = [];
                    }

                    // Push the post with extracted title
                    nestedPosts[category].push({ title: title, url: item.url });
                }
            }
        });



        // Convert nestedPosts to an array of {category, posts}
        let categories = Object.keys(nestedPosts).map(category => {
            return { category: category, posts: nestedPosts[category] };
        });

        // Sort the categories
        categories.sort((a, b) => a.category.localeCompare(b.category));

        return categories;

        
    });

    return {
        dir: {
            input: ".",
        }
    };
};


