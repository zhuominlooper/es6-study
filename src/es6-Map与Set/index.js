// map对象保存键值对，任何值(对象或者原始值) 都可以作为一个键或一个值。
//如果设置相同的key，后者覆盖前者

// key为字符串(数值也是一样)
let map1=new Map()
const keyString ="key为字符串"
map1.set(keyString ,'1')
map1.set(keyString ,'2')//覆盖前者
for([key,value] of map1){//解构遍历
  console.log(`key:${key},value:${value}`)
}

//key为对象
let map2=new Map()
const obj={}
map2.set(obj,'1')
map2.set({},'2') //obj!=={}
for([key,value] of map2){//解构遍历
  console.log(`key:${key},value:${value}`)
}

//key为func
let map3=new Map()
const func=function(){}
map3.set(func,'1')
map3.set(function(){},'2') //func!==function(){}
for([key,value] of map3){//解构遍历
  console.log(`key:${key},value:${value}`)
}

//map遍历
let map4=new Map()
map4.set(1,'数值1')
map4.set(2,'数值2')
map4.set(3,'数值3')

//map使用for of 遍历
for([key,value] of map4){//解构遍历
  console.log(`key:${key},value:${value}`)
}
for([key,value] of map4.entries()){//解构遍历
  console.log(`key:${key},value:${value}`)
}
for(let value of map4.values()){//解构遍历
  console.log(`value:${value}`)
}
for(let key of map4.keys()){//解构遍历
  console.log(`key:${key}`)
}

//Map 与 Array的转换
var kvArray = [["key1", "value1"], ["key2", "value2"]];
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var myMap = new Map(kvArray);
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
var outArray = Array.from(myMap);


//Set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
let set1=new Set()
set1.add(1)
set1.add(1)//去掉
set1.add('a')
set1.add('a')//去掉
set1.add({})
set1.add({})//不会去掉，因为地址不同,这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储

//遍历
for(let a of set1){
  console.log("set1的值为：",a)
}

//与数组转换
const arr=[1,2,3,3,4]
let set2=new Set(arr)//转换后会自动去重
console.log('数组转set的值：',set2)
const arr1=[...set2]
console.log("set转数组的值：",arr1)

//并集
let set3=new Set([1,2,4,5])
let set4=new Set([1,2,6,7])
let set5=new Set([...set3,...set4])
console.log("并集的结果：",set5)
//交集
let set6=new Set([...set3].filter(x=>set4.has(x)))
console.log("交集的结果：",set6)
//差集
let set7=new Set([...set3].filter(x=>!set4.has(x)))
console.log("交集的结果：",set7)


