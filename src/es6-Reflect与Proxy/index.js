// Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
// 它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。

//基本用法，target可以为空对象，代理器也可以为空对象
let target={name:'looper',age:23}
let proxy1=new Proxy(target,{
  get:(target,key)=>{
    console.log('调用了get方法')
    return target[key]
  },
  set:(target,key,value)=>{
    console.log('调用了set方法')
    target[key]=value 
  }
})//创建出的对象是浅拷贝
console.log(proxy1)
console.log(proxy1.name)

//实例
let validator = {
  set: function(obj, prop, value) {
      if (prop === 'age') {
          if (!Number.isInteger(value)) {
              throw new TypeError('The age is not an integer');
          }
          if (value > 200) {
              throw new RangeError('The age seems invalid');
          }
      }
      // 对于满足条件的 age 属性以及其他属性，直接保存
      obj[prop] = value;
  }
};
let proxy= new Proxy({name:'looper'}, validator)
// console.log(proxy)
// proxy.age = 100;
// console.log(proxy)
// proxy.age           // 100
// proxy.age = 'oppps' // 报错
// proxy.age = 300     // 报错

// Reflect
// Reflect 对象对某些方法的返回结果进行了修改，使其更合理。
// Reflect 对象使用函数的方式实现了 Object 的命令式操作。
//第一个参数不是对象会报错
let obj1={
  name:'looper',
  age:23,
  get info(){
    return this.name + this.age;
},
set ageinfo(value){
  return this.age=value
}
}
console.log(Reflect.get(obj1,'name'))//获取属性值，不存在就是undfined
console.log(Reflect.has(obj1,'name'))//判断属性值是否存在
Reflect.set(obj1,'name','zhuo')//设置属性值
console.log("设置属性的值：",obj1)
console.log(Reflect.get(obj1,'info',{name:"looperzhuo",age:99})) 


//set属性
let receiver = {
  age: 18
}
Reflect.set(obj1, 'ageinfo', 1, receiver); // true
console.log(receiver)

//构造函数
function exam1(name){
  this.name = name;
}
let obj2=Reflect.construct(exam1, ['Tom']); // exam {name: "Tom"}
console.log("构造函数生成实例:",obj2)

//为对象定义属性
const student = {};
Reflect.defineProperty(student, "name", {value: "Mike"}); // true
console.log("学生的名称",student['name'])

//返回对象的所有属性
const obj3={
  name:'q',
  age:12,
  sex:'男'
}
console.log("返回所有的属性：",Reflect.ownKeys(obj3))


//proxy和reflect结合使用
let exam2 = {
  name: "Tom",
  age: 24
}
let handler = {
  get: function(target, key){
      console.log("getting "+key);
      return Reflect.get(target,key);
  },
  set: function(target, key, value){
      console.log("setting "+key+" to "+value)
      Reflect.set(target, key, value);
  }
}
let proxy = new Proxy(exam2, handler)
proxy.name = "Jerry"
console.log(proxy.name)





