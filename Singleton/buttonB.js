import Counter from './counter.js';

export const buttonB = {
  click: function() {
    console.log('Button B clicked...');
    Counter.increment();
    console.log(`count: ${Counter.getCount()}`);
  }
};