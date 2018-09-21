"use strict";
exports.__esModule = true;
var emojis_en_US_1 = require("./emojis_en-US");
var emojis_pt_BR_1 = require("./emojis_pt-BR");
var shortcutMap = {};
var mapUpdater = function (map) {
    Object.keys(map).forEach(function (shortcut) {
        var value = map[shortcut];
        value.forEach(function (emoji) {
            if (!shortcutMap[emoji]) {
                shortcutMap[emoji] = [];
            }
            shortcutMap[emoji].push(shortcut);
        });
    });
};
mapUpdater(emojis_en_US_1.emojis);
mapUpdater(emojis_pt_BR_1.emojis);
Object.keys(shortcutMap).forEach(function (emoji, index) { return console.log(index + 1, "Emoji", emoji, "has shortcuts", shortcutMap[emoji]); });
