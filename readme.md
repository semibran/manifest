# manifest
> convert virtual DOM nodes into HTML elements

```js
let heading = manifest({
  tag: "h1",
  attributes: { class: "foo" },
  children: [ "hello world" ]
})

document.body.appendChild(heading)
console.log(document.body.outerHTML)
// <body><h1 class="foo">hello world</h1></body>
```

We can extend the definition of a virtual node as specified by [`hyper2/h2spec`][hyper2/h2spec] to cover primitive values. Doing so enables us to create "text nodes" out of raw strings, numbers, etc. and greatly simplifies vnode conversion. When used with primitive values, this function is practically equivalent to calling `document.createTextNode`, as in the following (impractical) example:

```js
let foo = manifest("foo")
let bar = document.createTextNode("bar")
document.body.appendChild(foo)
document.body.appendChild(bar)
console.log(document.body.outerHTML)
// <body>foobar</body>
```

## usage
[![npm badge]][npm package]

To use this module in your project, package your code together using a bundler like [`rollup`][rollup/rollup] together with [`rollup-plugin-node-resolve`][rollup/rollup-plugin-node-resolve].

## related
* [`semibran/patch`][semibran/patch]: efficient patch operation for HTML elements

[npm badge]:                         https://nodei.co/npm/@semibran/manifest.png?mini
[npm package]:                       https://www.npmjs.com/package/@semibran/manifest
[semibran/patch]:                    https://github.com/semibran/patch
[hyper2/h2spec]:                     https://github.com/hyper2/h2spec
[rollup/rollup]:                     https://github.com/rollup/rollup
[rollup/rollup-plugin-node-resolve]: https://github.com/rollup/rollup-plugin-node-resolve
