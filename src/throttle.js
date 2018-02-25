export default (func, interval) => {
  let timeout;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
      lastRan = Date.now();
    }, !lastRan ? 0 : interval - (Date.now() - lastRan));
  };
};
