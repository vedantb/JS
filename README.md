## JAVASCRIPT RESOURCES

### LODASH METHODS FROM SCRATCH

1. [Lodash Merge](./Lodash%20Merge)

2. [Simple Lodash Debounce](./Lodash%20Debounce/debounce.js)
3. [Lodash Debounce with maxWait](./Lodash%20Debounce/debounce-maxwait.js)
   Debounce is an incredible tool most commonly used to prevent responding too quickly to user input that is in motion. For example, preventing excessive AJAX requests made while a user types into an autocomplete field or quickly responding to window resize events without bringing your browser to a halt.

4. [Lodash Get](./Lodash%20Get/get.js)

   You can replace all of lodash get with the [optional chaining syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). Optional chaining syntax gives us the power of get without several of the tradeoffs. It doesn't require an extra library to use, it plays nicely with TypeScript and it can be used when calling methods as well as when accessing properties.

5. [Loadash Get With Optional Chaining](./Lodash%20Get/optional-chaining.js)

6. [Lodash Throttle](./Lodash%20Throttle)

Throttle is used to limit the number of times a function is called within a given period time. This is often helpful when dealing with forms of user input that trigger many events in a short period of time such as scroll and resize events. Another common use is helping to avoid logging errors too many times in a short period of time.

Our approach is to build the simplest `throttle` method possible using a boolean flag to indicate if the function has already been called and a `setTimeout` to reset the flag after a set period of time.

The Lodash implementation of throttle includes support for a number of options including leading and trailing, which specify when the throttle method will be called (either before or after the delay). We do not implement these.

7. [Lodash Pick](./Lodash%20Pick/pick.js)

`_.pick` and its sibling `_.omit` are popular utilities which apply filter-like functionality to objects. This code will demonstrate two different techniques for building the functionality found in `_.pick`.

Using `for...of` to loop through the keys array
Using `for..in` to loop through the target object

This code will also cover how to emulate `_.pick`'s support for either an array or multiple arguments for the picked keys using Rest params and `Array.prototype.flat()`.

8. [Lodash Omit](./Lodash%20Omit/omit.js)

`_.omit` and its sibling `_.pick` are popular utilities which apply filter-like functionality to objects. This code will demonstrate two techniques for building the functionality found in `_.omit`.

Cloning the object with `Object.assign` and removing unwanted keys with `delete`
Using `for...in` and `.includes` to manually copy keys into a result object

Note:
In modern JavaScript environments instead of `Object.assign({}, obj)` you can also use `{ ...obj }` which will have the same effect of a shallow copy.
