import { isEven } from './modules/m1.js';
import { fixedPrecision } from './modules/m2.js';

(async () => {
  isEven(12);
  fixedPrecision(123.456789, 3);
})();
