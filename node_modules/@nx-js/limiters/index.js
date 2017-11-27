'use strict'

const compiler = require('@nx-js/compiler-util')
const limiters = require('./limiters')

for (let name in limiters) {
  compiler.limiter(name, limiters[name])
}
