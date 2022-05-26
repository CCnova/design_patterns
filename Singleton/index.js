import { buttonA } from './buttonA.js';
import { buttonB } from './buttonB.js';

setInterval(() => {
  buttonA.click();
  buttonB.click();
}, 1000);