// Your code here
// index.js

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left.replace('px', ''), 10);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
