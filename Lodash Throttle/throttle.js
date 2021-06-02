// dom elements
let counter = document.getElementById("counter");
let kitty = document.getElementById("kitty");

// register events
window.addEventListener("mousemove", throttle(onMouseMove, 200));

function throttle(fn, time) {
  let isWaiting = false;
  return function (...args) {
    if (isWaiting) return;
    fn(...args);
    isWaiting = true;
    setTimeout(function () {
      isWaiting = false;
    }, time);
  };
}

// kitty follower
function onMouseMove(e) {
  kitty.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  updateCount();
}

//counter
let count = 0;
function updateCount() {
  count++;
  console.log(count);
  counter.innerHTML = count;
}
