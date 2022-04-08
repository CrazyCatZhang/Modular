import * as module1 from './module1';
import * as module2 from './module2';
import module3 from './module3';
import $ from 'jquery';

console.log(module1, module2, module3);
module1.foo();
module1.bar();
module2.fun();
module2.fun2();
module3();
$('body').css('background-color', 'red');