//es6数值主要是number对象新增的一些方法
//判断一个数是否有限
console.log( Number.isFinite(1));   // true
console.log( Number.isFinite(0.1)); // true
 
// NaN 不是有限的
console.log( Number.isFinite(NaN)); // false
console.log( Number.isFinite(Infinity));  // false
console.log( Number.isFinite(-Infinity)); // false
 
// Number.isFinate 没有隐式的 Number() 类型转换，所有非数值都返回 false
console.log( Number.isFinite('foo')); // false
console.log( Number.isFinite('15'));  // false
console.log( Number.isFinite(true));  // false

//检查一个值是否为 NaN 
console.log(Number.isNaN(NaN));      // true
console.log(Number.isNaN('true'/0)); // true
 
// 在全局的 isNaN() 中，以下皆返回 true，因为在判断前会将非数值向数值转换
// 而 Number.isNaN() 不存在隐式的 Number() 类型转换，非 NaN 全部返回 false
Number.isNaN("NaN");      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN("true");     // false

//Number.parseInt()
Number.parseInt('12.34'); // 12
Number.parseInt(12.34);   // 12
// 与全局的 parseInt() 函数是同一个函数
Number.parseInt === parseInt; // true
//用于把一个字符串解析成浮点数。
Number.parseFloat('123.45')   // 123.45
Number.parseFloat('123.45abc') // 123.45
