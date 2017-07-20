const request = require("request-promise");
const cheerio = require("cheerio");
const async = require("async");
const fs = require('fs');

const emoji_site = "http://www.jemoticons.com/en";
const emoji_site_base = "http://www.jemoticons.com";

const options = {
    uri: emoji_site,
    transform: (body) => {
        return cheerio.load(body);
    },
    resolveWithFullResponse: true
};

const getData = () => {
    request(options).then(($) => {
        const categories = $('div.nav div.cat a');
        const categoryMap = {}

        categories.each((i, el) => {
            const link = $(el).attr('href');
            const category = $(el).text();
            categoryMap[category] = link
        });

        return categoryMap;
    }).then((categoryMap) => {
        const kaomojiMap = {};
        const keys = Object.keys(categoryMap);

        async.map(keys, (key, callback) => {
            const categoryLink = emoji_site_base + categoryMap[key];
            options.uri = categoryLink;

            request(options).then(($) => {
                const kaomojiArray = [];

                const kaomoji = $('div.emoticons textarea');
                kaomoji.each((i, el) => {
                    kaomojiArray[i] = $(el).text();
                });

                callback(undefined, kaomojiArray)
            }).catch((reason) => {
                console.log(reason);
            });
        }, (err, results) => {
            for (let i=0; i<keys.length; i++) {
                kaomojiMap[keys[i]] = results[i];
            }

            const jsonKaomoji = JSON.stringify(kaomojiMap);
            fs.writeFile("data/kaomoji.json", jsonKaomoji, 'utf8', (err) => {
                if (err) {
                    return console.log(err);
                }

                console.log("Kaomoji file saved!");
            });
        });
    }).catch((reason) => {
        console.log(reason);
    });
}

getData();