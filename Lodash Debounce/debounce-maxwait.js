const debouncedInput = document.getElementById("input-debounced");

debouncedInput.addEventListener(
  "keyup",
  debounce(logEvent, 300, { maxWait: 1000 })
);

function logEvent(e) {
  e.target.parentElement.nextElementSibling.innerHTML +=
    e.target.value + "<br />";
}

function debounce(fn, wait, { maxWait }) {
  let timer, maxTimer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(maxTimer);
      maxTimer = null;
      fn(...args);
    }, wait);
    if (maxWait && !maxTimer) {
      maxTimer = setTimeout(() => {
        clearTimeout(timer);
        maxTimer = null;
        fn(...args);
      }, maxWait);
    }
  };
}

// we now have 2 competing timers. Let's clear the other timer within each of these. This ensures that both timers aren't
// triggered one after another
// After you clearTimeouts, we need "maxtimer = null" and add the if condition. Essentially what we are doing here
// is that we are preventing the timer from being set more than once at a time. Once the timer actually fires
// we will go ahead and set it to null and on the next keyup it will be set again. We should also set maxTimer=null
// in the first timer so that once the timer is fired, we make sure it's reset again next time keyup is fired.

// setTimeout returns a timer ID not the actual timer object itself, which is why we have to null
// it out after we already call clearTimeout
