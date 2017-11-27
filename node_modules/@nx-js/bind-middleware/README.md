# The bind middleware

The `bind` middleware makes the `input`, `select` and `textarea` elements bindable with the `bind` custom attribute.

- name: bind
- middleware dependencies: [bindable](https://github.com/nx-js/bindable-middleware)
- all middleware dependencies: [observe](https://github.com/nx-js/observe-middleware), [attributes](https://github.com/nx-js/attributes-middleware), [bindable](https://github.com/nx-js/bindable-middleware)
- processes: element nodes
- throws on: nothing
- use as: component or content middleware
- [docs](http://nx-framework/docs/middlewares/bind)

## Installation

`npm install @nx-js/bind-middleware`

## Usage

```js
const component = require('@nx-js/core')
const observe = require('@nx-js/observe-middleware')
const attributes = require('@nx-js/attributes-middleware')
const bindable = require('@nx-js/bindable-middleware')
const bind = require('@nx-js/bind-middleware')

component()
  .useOnContent(observe)
  .useOnContent(attributes)
  .useOnContent(bindable)
  .useOnContent(bind)
  .register('binding-comp')
```

```html
<binding-comp>
  <input type="number" name="age" bind />
</binding-comp>
```
