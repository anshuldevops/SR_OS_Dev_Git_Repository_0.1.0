# The events middleware

The `events` middleware allows you to use inline event handler attributes in the HTML view.

- name: events
- middleware dependencies: none
- all middleware dependencies: none
- processes: element nodes
- throws on: nothing
- use as: component or content middleware
- [docs](http://nx-framework/docs/middlewares/events)

## Installation

`npm install @nx-js/events-middleware`

## Usage

```js
const component = require('@nx-js/core')
const events = require('@nx-js/events-middleware')

component()
  .useOnContent(events)
  .register('events-comp')
```

```html
<events-comp>
  <button #click="alert('Hello World!')">Click me</button>
</events-comp>
```
