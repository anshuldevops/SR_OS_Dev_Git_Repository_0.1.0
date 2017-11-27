# The render middleware factory

The `render` middleware factory allows you to modularize your components into separate JavaScript, HTML and CSS files.

- name: render
- direct middleware dependencies: none
- all middleware dependencies: none
- type: component middleware
- [docs](http://nx-framework.com/docs/middlewares/render)

## Installation

`npm install @nx-js/render-middleware`

## Usage

```js
const component = require('@nx-js/core')
const params = require('@nx-js/render-middleware')

component()
  .use(render({
    template: require('./view.html'),
    style: require('./style.css')
  }))
  .register('comp-name')
```
