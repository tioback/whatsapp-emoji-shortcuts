import { emojis as emojisEN } from "./emojis_en-US";
import { emojis as emojisPT } from "./emojis_pt-BR";

const shortcutMap: any = {};

const mapUpdater = (map) => {
	Object.keys(map).forEach(shortcut => {
	    const value: string[] = map[shortcut];
	    value.forEach(emoji => {
	        if (!shortcutMap[emoji]) {
	            shortcutMap[emoji] = [];
	        }
	        (shortcutMap[emoji] as string[]).push(shortcut);
	    });
	});
}

mapUpdater(emojisEN);
mapUpdater(emojisPT);

Object.keys(shortcutMap).forEach((emoji, index) => console.log(index + 1, "Emoji", emoji, "has shortcuts", shortcutMap[emoji]));
