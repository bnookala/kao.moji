const fs = require('fs');

const exported = {};

const Kaomoji = function () {
    const jsonContents = fs.readFileSync("data/kaomoji.json");

    this.kaomoji = JSON.parse(jsonContents, 'utf8');
    this.categoryAliasMap = {};

    const keys = Object.keys(this.kaomoji);

    for (let i=0; i<keys.length; i++) {
        const originalKey = keys[i];
        const kaomojiMapping = this.kaomoji[originalKey];

        // Clean up the original key for easier programmatic access.
        const keyAliases = originalKey.toLowerCase().replace(' ', '').replace(' ', '').replace("\'", '').split('/');

        // Add the mappings as instance properties.
        for (let j=0; j<keyAliases.length; j++) {
            const name = keyAliases[j];

            // This is exported out.
            exported[name] = name;

            // Map alias to original key.
            this.categoryAliasMap[name] = originalKey;

            // Set up a function on the instance that allows us to get a random kaomoji from
            // a category's name ie:
            // kaomoji.tableflip();
            this[name] = (options) => {
                if (options && options.all) {
                    return kaomojiMapping;
                } else {
                    return kaomojiMapping[Math.floor(Math.random() * kaomojiMapping.length)];
                }
            }
        }
    }
};

// Retrieves all available categories and returns them as an array.
Kaomoji.prototype.available = function () {
    return Object.keys(this.categoryAliasMap);
}

exported['moji'] = new Kaomoji();

module.exports = exported;