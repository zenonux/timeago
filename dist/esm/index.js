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

// src/formatTypes/default.ts
var default_default = [
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

// src/formatTypes/detail.ts
var detail_default = [
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
var comment_default = [
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

// src/formatTypes/chat.ts
var chat_default = [
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

// src/formatTypes/message.ts
var message_default = [
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
        zh_CN: "\u6628\u5929",
        en_US: "yday"
      };
      return locales[locale];
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
var format = (time, type = "DEFAULT", locale = "zh_CN") => {
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
register("DEFAULT", default_default);
register("DETAIL", detail_default);
register("COMMENT", comment_default);
register("CHAT", chat_default);
register("MESSAGE", message_default);
export {
  format,
  register
};
