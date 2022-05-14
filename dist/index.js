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
  format: () => format,
  register: () => register
});
module.exports = __toCommonJS(src_exports);

// src/register.ts
var AllFormatTypes = {};
var register = (type, breaks) => {
  AllFormatTypes[type] = breaks;
};
var getFormatType = (type) => {
  return AllFormatTypes[type];
};

// src/utils.ts
var isYesterday = (date) => {
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();
};
var isToday = (date) => {
  return new Date().getTime() - date.getTime() < 864e5;
};
var isThisYear = (date) => {
  return date.getFullYear() === new Date().getFullYear();
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
var formatDateShort = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [month, day].map(formatNumber).join("-");
};
var formatTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  return [hour, minute].map(formatNumber).join(":");
};
var formatDateTime = (date) => {
  return formatDate(date) + " " + formatTime(date);
};
var formatDateShortTime = (date) => {
  return formatDateShort(date) + " " + formatTime(date);
};

// src/formatTypes/common.ts
var commonType = [
  {
    label: "IN_5_MIN",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u521A\u521A",
        en_US: "now"
      };
      return locales[locale];
    }
  },
  {
    label: "IN_1_HOUR",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "%s\u5206\u949F\u524D",
        en_US: "%sm ago"
      };
      let value = Math.floor(diffSeconds / 60);
      return locales[locale].replace(/%s/gi, value);
    }
  },
  {
    label: "IN_TODAY",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "%s\u5C0F\u65F6\u524D",
        en_US: "%sh ago"
      };
      let value = Math.floor(diffSeconds / 3600);
      return locales[locale].replace(/%s/gi, value);
    }
  },
  {
    label: "IN_YESTERDAY",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u6628\u5929 %s",
        en_US: "yday %s"
      };
      return locales[locale].replace(/%s/gi, formatTime(date));
    }
  },
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds, date, locale) => {
      return formatDateShort(date);
    }
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds, date, locale) => {
      return formatDate(date);
    }
  }
];

// src/formatTypes/comment.ts
var commentType = [
  {
    label: "IN_1_HOUR",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "%s\u5206\u949F\u524D",
        en_US: "%sm ago"
      };
      let value = Math.floor(diffSeconds / 60);
      value = value || 1;
      return locales[locale].replace(/%s/gi, value);
    }
  },
  {
    label: "IN_TODAY",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "%s\u5C0F\u65F6\u524D",
        en_US: "%sh ago"
      };
      let value = Math.floor(diffSeconds / 3600);
      return locales[locale].replace(/%s/gi, value);
    }
  },
  {
    label: "IN_YESTERDAY",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u6628\u5929 %s",
        en_US: "yday %s"
      };
      return locales[locale].replace(/%s/gi, formatTime(date));
    }
  },
  {
    label: "IN_4_DAYS",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "%s\u5929\u524D",
        en_US: "%sd"
      };
      return locales[locale].replace(/%s/gi, formatTime(date));
    }
  },
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds, date, locale) => {
      return formatDateShort(date);
    }
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds, date, locale) => {
      return formatDate(date);
    }
  }
];

// src/formatTypes/msg_detail.ts
var msgDetailType = [
  {
    label: "IN_5_MIN",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u521A\u521A",
        en_US: "now"
      };
      return locales[locale];
    }
  },
  {
    label: "IN_TODAY",
    parse: (diffSeconds, date, locale) => {
      return formatTime(date);
    }
  },
  {
    label: "IN_YESTERDAY",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u6628\u5929 %s",
        en_US: "yday %s"
      };
      return locales[locale].replace(/%s/gi, formatTime(date));
    }
  },
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds, date, locale) => {
      return formatDateShortTime(date);
    }
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds, date, locale) => {
      return formatDateTime(date);
    }
  }
];

// src/formatTypes/msg_list.ts
var msgListType = [
  {
    label: "IN_5_MIN",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u521A\u521A",
        en_US: "now"
      };
      return locales[locale];
    }
  },
  {
    label: "IN_TODAY",
    parse: (diffSeconds, date, locale) => {
      return formatTime(date);
    }
  },
  {
    label: "IN_YESTERDAY",
    parse: (diffSeconds, date, locale) => {
      const locales = {
        zh_CN: "\u6628\u5929 %s",
        en_US: "yday %s"
      };
      return locales[locale].replace(/%s/gi, formatTime(date));
    }
  },
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds, date, locale) => {
      return formatDateShort(date);
    }
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds, date, locale) => {
      return formatDate(date);
    }
  }
];

// src/formatTypes/works_detail.ts
var worksDetailType = [
  {
    label: "IN_1_YEAR",
    parse: (diffSeconds, date, locale) => {
      return formatDateShort(date);
    }
  },
  {
    label: "IN_YEARS",
    parse: (diffSeconds, date, locale) => {
      return formatDate(date);
    }
  }
];

// src/format.ts
var handlers = {
  IN_5_MIN: (diffSeconds, date) => {
    if (diffSeconds < 5 * 60) {
      return true;
    }
    return false;
  },
  IN_1_HOUR: (diffSeconds, date) => {
    if (diffSeconds < 1 * 60 * 60) {
      return true;
    }
    return false;
  },
  IN_TODAY: (diffSeconds, date) => {
    return isToday(date);
  },
  IN_YESTERDAY: (diffSeconds, date) => {
    return isYesterday(date);
  },
  IN_4_DAYS: (diffSeconds, date) => {
    if (diffSeconds < 4 * 12 * 60 * 60) {
      return true;
    }
    return false;
  },
  IN_1_YEAR: (diffSeconds, date) => {
    return isThisYear(date);
  },
  IN_YEARS: (diffSeconds, date) => {
    return !isThisYear(date);
  }
};
var format = (time, type = "common", locale = "zh_CN") => {
  let date = toDate(time);
  let diffSeconds = (new Date().getTime() - date.getTime()) / 1e3;
  let breaks = getFormatType(type);
  for (let i = 0; i < breaks.length; i++) {
    if (handlers[breaks[i].label] && handlers[breaks[i].label](diffSeconds, date)) {
      return breaks[i].parse(diffSeconds, date, locale);
    }
  }
  return formatDateTime(date);
};

// src/index.ts
register("common", commonType);
register("comment", commentType);
register("msgDetail", msgDetailType);
register("msgList", msgListType);
register("worksDetail", worksDetailType);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  format,
  register
});
