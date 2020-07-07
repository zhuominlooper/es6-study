
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
