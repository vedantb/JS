const normalInput = document.getElementById("input-normal");
const debouncedInput = document.getElementById("input-debounced");

normalInput.addEventListener("keyup", logEvent);
debouncedInput.addEventListener("keyup", debounce(logEvent, 300));

function logEvent(e) {
  e.target.parentElement.nextElementSibling.innerHTML +=
    e.target.value + "<br />";
}

// fn is the function we will debounce and wait is the wait period
function debounce(fn, wait) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

// We also need to handle the arguments that are passed into our functions such as the keyup event
// which is passed to logEvent. TO do that, we are going to use our rest parameters in our function signature.
// This will put all recieved parameters into an array called args and we could then apply that to our setTimeout
// function using an arrow function and spreading those args
