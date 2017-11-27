'use strict'

module.exports = function propsFactory(...propNames) {
  function props (elem) {
    for (let propName of propNames) {
      elem.$attribute(propName, propHandler)
    }
  }
  props.$name = 'props'
  props.$require = ['attributes']
  props.$type = 'component'
  return props
}

function propHandler (value, name) {
  this.$state[name] = value
}
