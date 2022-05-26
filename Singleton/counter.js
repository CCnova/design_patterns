let count = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('Only one instance of Counter can be created!');
    }

    instance = this;
  }

  getInstance() {
    return instance;
  }

  getCount() {
    return count;
  }

  increment() {
    count++;
  }

  decrement() {
    count--;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;