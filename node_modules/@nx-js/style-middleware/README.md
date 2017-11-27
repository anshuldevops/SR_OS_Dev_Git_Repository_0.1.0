# The style middleware

The `style` middleware is responsible for dynamic styling.

- name: style
- middleware dependencies: [attributes](https://github.com/nx-js/attributes-middleware)
- all middleware dependencies: [observe](https://github.com/nx-js/observe-middleware), [attributes](https://github.com/nx-js/attributes-middleware)
- processes: element nodes
- throws on: nothing
- use as: component or content middleware
- [docs](http://nx-framework/docs/middlewares/style)

## Installation

`npm install @nx-js/style-middleware`

## Usage

```js
const component = require('@nx-js/core')
const observe = require('@nx-js/observe-middleware')
const attributes = require('@nx-js/attributes-middleware')
const style = require('@nx-js/style-middleware')

component()
  .useOnContent(observe)
  .useOnContent(attributes)
  .useOnContent(style)
  .register('stylish-comp')
```

```html
<stylish-comp>
  <div @class="{big: true, outlined: shouldOutline}"></div>
</stylish-comp>
```
