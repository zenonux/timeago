# timeago

timeago like douban & zhihu for social community.

## Install

`npm i @urcloud/timeago -S`

## Usage

```js
import timeago from '@urcloud/timeago'
timeago.register('customType', [
  {
    label: 'IN_5_MIN',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        zh_CN: '刚刚',
        en_US: 'now',
      }
      return locales[locale]
    },
  },
  {
    label: 'IN_1_HOUR',
    parse: (diffSeconds: number, date: Date, locale: string) => {
      const locales = {
        zh_CN: '%s分钟前',
        en_US: '%sm ago',
      }
      let value = Math.floor(diffSeconds / 60)
      return locales[locale].replace(/%s/gi, value)
    },
  },
])
timeago(new Date())
timeago(1544666010224)
timeago('2018-12-12', 'customType')
```
