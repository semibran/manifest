# manifest
> Turns virtual DOM nodes into real DOM elements

```js
const manifest = require("manifest")

var element = manifest({
  tag: "div",
  attributes: { class: "foo" },
  children: ["hello world"]
})
```

## see also
- [`semibran/h`](https://github.com/semibran/h) - shorthand for `{ tag, attributes, children }`

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
