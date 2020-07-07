"use strict"

var a='12'//严格模式下变量必须加上关键字var修饰

function b(){
 console.log(this)//严格模式下禁止函数里指向window
}
b()//undefined

function Obj(){
    this.name='looper'
}

var obj1=new Obj()//正常的创建对象
console.log(obj1.name)
var obj2=Obj()//此种写法会污染全局变量，因为此时obj是一个函数，this指向window，加上严格模式后，this是underfine，所以会报错

var c={
    name:'looper',
  //  nmae:'zhangsan'
}//严格模式不允许定义相同的属性
