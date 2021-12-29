"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(time) {
    var date = toDate(time);
    var second = (new Date().getTime() - date.getTime()) / 1000, minute = second / 60, hour = minute / 60, day = hour / 24, result = '';
    if (day >= 2)
        result = formatDate(date);
    else if (day >= 1)
        result = '昨天' + formatTime(date);
    else if (hour >= 1)
        result = Math.floor(hour) + '小时前';
    else if (minute >= 1)
        result = Math.floor(minute) + '分钟前';
    else if (second >= 9)
        result = Math.floor(second) + '秒前';
    else if (second >= 1)
        result = '刚刚';
    return result;
}
exports.default = format;
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    return new Date(input);
}
function formatNumber(n) {
    var s = n.toString();
    return s[1] ? s : "0" + s;
}
function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join("-");
}
;
function formatTime(date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    return [hour, minute].map(formatNumber).join(":");
}
;
