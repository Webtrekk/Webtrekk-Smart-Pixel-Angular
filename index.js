/**
 * @type {{use: (function(Window, Document): wtSmart)}}
 */
const webtrekkSmartPixel = require("webtrekk-smart-pixel");
import WebtrekkSmartPixelAngular from "./lib/smart-pixel-angular";

/**
 * @type {WebtrekkSmartPixelAngular}
 */
export default new WebtrekkSmartPixelAngular(webtrekkSmartPixel);
