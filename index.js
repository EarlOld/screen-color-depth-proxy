// propblem https://medium.com/@mikehall314/the-strangest-bug-i-ever-encountered-e7d570e06ee7

const handler = {
  get(target, prop) {
    const propsToPatch = ['colorDepth', 'pixelDepth'];
    if (propsToPatch.includes(prop) === false) {
      return target[prop];
    }

    const normal = [48, 32, 24, 16, 15, 8, 4, 2, 1];
    return normal.find((depth) => depth <= target[prop]) || 24;
  },
};
if ('Proxy' in window) {
  window.screen = new Proxy(window.screen, handler);
}
