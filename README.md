## JAVASCRIPT RESOURCES

### LODASH METHODS FROM SCRATCH

1. [Lodash Merge](./Lodash%20Merge)
2. [Simple Lodash Debounce](./Lodash%20Debounce/debounce.js)
3. [Lodash Debounce with maxWait](./Lodash%20Debounce/debounce-maxwait.js)
4. [Lodash Get](./Lodash%20Get/get.js)

   You can replace all of lodash get with the [optional chaining syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). Optional chaining syntax gives us the power of get without several of the tradeoffs. It doesn't require an extra library to use, it plays nicely with TypeScript and it can be used when calling methods as well as when accessing properties.

5. [Loadash Get With Optional Chaining](./Lodash%20Get/optional-chaining.js)

6. [Lodash Throttle](./Lodash%20Throttle)

Throttle is used to limit the number of times a function is called within a given period time. This is often helpful when dealing with forms of user input that trigger many events in a short period of time such as scroll and resize events. Another common use is helping to avoid logging errors too many times in a short period of time.

Our approach is to build the simplest `throttle` method possible using a boolean flag to indicate if the function has already been called and a `setTimeout` to reset the flag after a set period of time.

The Lodash implementation of throttle includes support for a number of options including leading and trailing, which specify when the throttle method will be called (either before or after the delay). We do not implement these.
