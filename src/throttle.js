export default (func, interval) => {
  let inThrottle;
  let lastCall;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), interval);
    } else {
      clearTimeout(lastCall);
      lastCall = setTimeout(() => func.apply(context, args), interval);
    }
  };
};
