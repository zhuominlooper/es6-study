//箭头函数
//写法
let fun1=(a,b)=>a+b//=>{return a+b}
console.log(fun1(2,3))
//当执行体里有多行
let fun2=(a,b) => {
  console.log("a:"+a+" b:"+b)
  return a+b
}
console.log(fun2(2,3))
//如果箭头函数要抛出异常，只能=>{throw},因为throw的左边不能跟return
let fun3=()=>{throw 444}
try{
  fun3()
}catch(err){
  console.log("异常是：",err)
}

//箭头函数的this指向
//用function，this不好控制
 var div =document.getElementById('div')
 div.onclick =function(){
     //保存该function的this
     let self=this
     console.log(this)
  setInterval(function(){
   //此时如果用this，this指向window，因为该计时器是window调用
   console.log(this)
   this.style.backgroundColor=`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})` 
  }.bind(this),1000)
 }
 //
 var div1 =document.getElementById('div1')
 div1.onclick =function(){
   let self=this
  setInterval(()=>{
   //此时如果用this，箭头函数的this指向上一层的self
   this.style.backgroundColor=`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})` 
  },1000)
 }

 //箭头函数可以设置默认参数
  fun=(a,b=5)=>{
    return a+b
  }
console.log('fun:',fun(1,undefined))

   function fun4(a){
     return a?a:0
   }
   console.log(fun4())

   //函数查找参数，使用作用域链，就近原则
     var num=5
     fun5=function(num=3,x=num){
      return x
   }
   console.log('funs=5:',fun5())

   fun6=function(a=3,x=num){
    return x
 }
 console.log('funs=6:',fun6())

 //扩展运算符
  let arr1=['1','2']
  let arr2=[...arr1]//深拷贝，clone出来的，如果用=，就是浅拷贝
  console.log("arr1和arr2相等吗：",arr1==arr2)//内存地址不一样
  arr2[0]='11111111'
  console.log(arr1)//不会改变
  console.log(arr2)
  //扩展运算符处理对象
  let obj1={
    name:'looper',
    age:12
  }
  let objCopy={
    adress:'成都',
    sex:'男'
  }
  obj2={...obj1,name:'zhuo',sex:'男'}//深拷贝，如果有属性就修改，没有就添加
  obj3={...obj1,...objCopy}
  console.log('解构处理对象:',obj2)
  console.log('解构对象复制:',obj3)
  //扩展运算符传参进行解构
   fun7=function(a,b){
     console.log("a:"+a+" b:"+b)
   }
   fun7(...arr1)//解构

   fun8=function(a,...args){
     console.log('args:',args)
   }
   fun8(1,2,3,4,5,6)






