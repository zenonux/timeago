"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
var date_1 = require("./date");
var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
var format = function (date, locale, opts) {
    // diff seconds
    var sec = (0, date_1.diffSec)(date, opts && opts.relativeDate);
    // format it with locale
    return (0, date_1.formatDiff)(sec, function (diff, idx) {
        if (idx === 0)
            return ['刚刚', '片刻后'];
        var unit = ZH_CN[~~(idx / 2)];
        return ["".concat(diff, " ").concat(unit, "\u524D"), "".concat(diff, " ").concat(unit, "\u540E")];
    });
};
exports.format = format;
