// includes()：返回布尔值，判断是否找到参数字符串。
// startsWith()：返回布尔值，判断参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，判断参数字符串是否在原字符串的尾部
let string = "apple,banana,orange";
string.includes("banana");     // true
string.startsWith("apple");    // true
string.endsWith("apple");      // false
string.startsWith("banana",6)  // true

// 注意点：
// 这三个方法只返回布尔值，如果需要知道子串的位置，还是得用 indexOf 和 lastIndexOf 。
// 这三个方法如果传入了正则表达式而不是字符串，会抛出错误。而 indexOf 和 lastIndexOf 这两个方法，
// 它们会将正则表达式转换为字符串并搜索它。

//字符串copy
let str1='looper'
console.log("字符串复制",str1.repeat(4))//如果小数向下取整，如果参数是 0 至 -1 之间的小数，会进行取整运算，0 至 -1 之间的小数取整得到 -0 ，等同于 repeat 零次

//字符串补全
//以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
console.log("h".padStart(5,"o"));  // "ooooh"
console.log("h".padEnd(5,"o"));    // "hoooo"
console.log("h".padStart(5));      // "    h"
console.log("hello".padStart(5,"A"));  // "hello",如果指定的长度小于或者等于原字符串的长度，则返回原字符串:

//模板字符串
let string1 = `Hello'\n'world`;
console.log(string1); 
// "Hello'
// 'world"

//字符串换行
let string2 =  `Hey,
can you stop angry now?`;
console.log(string2);
// Hey,
// can you stop angry now?

//插入变量
let name="looper"
console.log(`我的名字是:${name}`)

//标签模板
//标签模板，是一个函数的调用，其中调用的参数是模板字符串。
let test=function(value){
   return `标签模板的值:${value}`
}
console.log(test`looper`)
