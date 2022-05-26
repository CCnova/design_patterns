import Counter from './counter.js';

export const buttonA = {
  click: function() {
    console.log('Button A clicked...');
    Counter.increment();
    console.log(`count: ${Counter.getCount()}`);
  }
};