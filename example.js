const kao = require('./index');

console.log("The kao module has a `moji` object that picks a kaomoji at random from a category `kao.moji.tablefip()`:" + kao.moji.tableflip() + "\n\n");

console.log("You can return all kaomoji in a category by passing an options object with the `all` property set to true `kao.moji.tableflip({all: true}`):");
console.log(kao.moji.tableflip({all: true}));

console.log("\n\n");

console.log("You can see all available categories by calling `available` on the `moji` object `kao.moji.available()` :");
console.log(kao.moji.available());
console.log("\n\n");

console.log("Category aliases are properties on the module `kao.trymybest` : " + kao.trymybest);