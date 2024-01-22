# @mkody/vue3-simple-icons

[Simple Icons](https://simpleicons.org/) as Vue components.

## Install

```bash
npm install @mkody/vue3-simple-icons
```

## Usage

```js
import { ApacheMavenIcon, NpmIcon } from '@mkody/vue3-simple-icons'
```

See all icons and usage here: https://mkody.github.io/vue3-simple-icons/


```html
<ApacheMavenIcon style="fill: white"/>
```

You can also set a `px` size directly by passing an integer

```html
<NpmIcon style="fill: white" size="24px" />
```


## Note
* Because [identifiers can’t start with numeric literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Identifier_after_number), names beginning with numbers have them converted to English words. For example, the logo for 500px is available as `FiveHundredPxIcon`.
* Versioning follows the [Simple Icons](https://github.com/simple-icons/simple-icons) package.

## Credit
Forked from [mainvest/vue-simple-icons](https://github.com/mainvest/vue-simple-icons)
and from [wyatt-herkamp/vue3-simple-icons](https://github.com/wyatt-herkamp/vue3-simple-icons)

Based on [**vue-feather-icons**](https://github.com/egoist/vue-feather-icons) by [egoist](https://github.com/egoist)
