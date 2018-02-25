export default (func, interval) => {
  let timeout;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    const nextInterval = !lastRan ? 0 : interval - (Date.now() - lastRan);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const timeSinceLastCall = Date.now() - lastRan;
      console.log(timeSinceLastCall);
      // if (timeSinceLastCall >= interval) {
      func.apply(context, args);
      lastRan = Date.now();
      console.log(lastRan);
      // }
    }, nextInterval);
  };
};
