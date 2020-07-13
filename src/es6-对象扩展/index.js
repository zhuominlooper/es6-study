
//create
var a={
  name:'looper'
}
var b=Object.create(a,{
  age:{
    value:20,
    writable:true
  } 
})//创建一个新的对象，实现类的继承
console.log(a)
console.log(b)

//defineProperty
Object.defineProperty(b,'name',{
  value:33
})//修改属性，如果属性不存在，则添加，不能修改原型的属性
console.log(b)

//defineProperties
var person={
  firstname:'loo',
  lastname:'per'
}
Object.defineProperties(person,{
  fullname:{
    get:function(){
      return "fullname为"+this.firstname+this.lastname
    },
    set:function(value){
      this.firstname=value
   }
    } 
})//实现索引器功能
console.log(person.fullname)
person.fullname='zhuo'
console.log(person.fullname)

//ES6允许对象的属性直接写变量，这时候属性名是变量名，属性值是变量值
let name="looper"
let age=33
let person1={name,age}
console.log("es6创建对象的简便写法：",person1)

//属性名表达式
let person2={
  ["na"+"me"]:"looper"
}
console.log("属性名表达式：",person2)

// Object.assign(target, source_1, ···)
// 用于将源对象的所有可枚举属性复制到目标对象中。
let target1 = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target1,object2,object3); //浅拷贝 
console.log("将源对象的所有可枚举属性复制到目标对象中",target1)
target1.b=4
console.log("浅拷贝的值",object2)
let sourceObj = { a: { b: 1}};
let targetObj = {c: 3};
Object.assign(targetObj, sourceObj);
targetObj.a.b = 2;
console.log(sourceObj.a.b)

//Object.is(value1, value2)
// 用来比较两个值是否严格相等，与（===）基本类似
Object.is("q","q");      // true
Object.is(1,1);          // true
Object.is([1],[1]);      // false
Object.is({q:1},{q:1});  // false

