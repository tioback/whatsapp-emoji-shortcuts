import { emojis } from "./emojis_en-US";

const shortcutMap: any = {};

Object.keys(emojis).forEach(shortcut => {
    const value: string[] = emojis[shortcut];
    value.forEach(emoji => {
        if (!shortcutMap[emoji]) {
            shortcutMap[emoji] = [];
        }
        (shortcutMap[emoji] as string[]).push(shortcut);
    });
});

Object.keys(shortcutMap).forEach((emoji, index) => console.log(index + 1, "Emoji", emoji, "has shortcuts", shortcutMap[emoji]));
