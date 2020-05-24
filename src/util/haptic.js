export function click() {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(10);
  }
}

export function long() {
  if (window.navigator.vibrate) {
    window.navigator.vibrate(150);
  }
}
