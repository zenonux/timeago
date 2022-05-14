var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => format
});
module.exports = __toCommonJS(src_exports);

// src/utils.ts
var isYesterday = (date) => {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();
};
var toDate = (input) => {
  if (input instanceof Date)
    return input;
  if (!isNaN(input) || /^\d+$/.test(input))
    return new Date(parseInt(input));
  input = (input || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2");
  return new Date(input);
};
var formatNumber = (n) => {
  const s = n.toString();
  return s[1] ? s : "0" + s;
};
var formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join("-");
};
var formatTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return [hour, minute].map(formatNumber).join(":");
};

// src/index.ts
function format(time) {
  let date = toDate(time);
  let second = (new Date().getTime() - date.getTime()) / 1e3, minute = second / 60, hour = minute / 60, day = hour / 24, result = "";
  if (isYesterday(date)) {
    return "\u6628\u5929" + formatTime(date);
  } else if (day >= 1) {
    result = formatDate(date);
  } else if (hour >= 1) {
    result = Math.floor(hour) + "\u5C0F\u65F6\u524D";
  } else if (minute >= 1) {
    result = Math.floor(minute) + "\u5206\u949F\u524D";
  } else if (second >= 9) {
    result = Math.floor(second) + "\u79D2\u524D";
  } else {
    result = "\u521A\u521A";
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
