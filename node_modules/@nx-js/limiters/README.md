# Limiters

This repository contains a collection of rate limiters for the
[compiler utility](https://github.com/nx-js/compiler-util). It creates an registers the
following limiters.

- if: Has one parameter. If the parameter is falsy, the event handler won't be called.
- delay: Has a number parameter and delays the event handler by that many milliseconds. The delay is 200 milliseconds by default.
- debounce: Has a number parameter and causes the event handler to only execute, if the event doesn't happen for at least that many milliseconds. The parameter is 200 milliseconds by default.
- throttle: Has a number parameter and causes the event handler to execute only if it didn't execute in the last interval. The parameter is 200 - milliseconds by default.
- key: Only handles the event if it matches with one of the keys provided as arguments. If the event is not a keyboard event, this limiter has no effect. For the name of special keys see [this page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key).

You can learn more
about NX rate limiters [here](http://nx-framework/docs/middlewares/interpolate).
