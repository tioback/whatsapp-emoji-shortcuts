"use strict";
exports.__esModule = true;
var emojis_en_US_1 = require("./emojis_en-US");
var shortcutMap = {};
Object.keys(emojis_en_US_1.emojis).forEach(function (shortcut) {
    var value = emojis_en_US_1.emojis[shortcut];
    value.forEach(function (emoji) {
        if (!shortcutMap[emoji]) {
            shortcutMap[emoji] = [];
        }
        shortcutMap[emoji].push(shortcut);
    });
});
Object.keys(shortcutMap).forEach(function (emoji, index) { return console.log(index + 1, "Emoji", emoji, "has shortcuts", shortcutMap[emoji]); });
