# Filters

This repository contains a collection of filters for the
[compiler utility](https://github.com/nx-js/compiler-util). It creates an registers the
following filters.

- capitalize: Capitalizes the passed string.
- lowercase: Transforms the passed string to a lower case format.
- uppercase: Transforms the passed string to an uppercase format.
- unit: Has a value and a unit name parameter. Appends the unit name after the value and pluralizes the unit if the value is plural.
- slice: Has two number parameters. Slices the value from the first to the second parameter.
- json: Converts the passed value to JSON. The indentation level can be passed as an argument.
- date: Converts the passed date to a local date string.
- time: Converts the passed date to a local time string.
- datetime: Converts the passed date to a local datetime string.

You can learn more
about NX filters [here](http://nx-framework/docs/middlewares/interpolate).
