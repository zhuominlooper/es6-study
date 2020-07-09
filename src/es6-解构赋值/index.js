
//数组解构赋值
let aa=1
let bb=2
let cc=3
//解构-常规
let [a,b,c]=[4,5,6]
console.log("a:"+a+" b:"+b+" c:"+c)
//解构-赋值null和undefine
let [d,f]=[1]//等同于=[1,undefined]
console.log("d:"+d+" f:"+f)
let [g,h]=[1,null]
console.log("g:"+g+" h:"+h)
//解构-设置默认值
let [j,k="test"]=[1,null]
console.log("j:"+j+" k:"+k)//k为null
//let [j,k="test"]=[1,undefine]
//console.log("j:"+j+" k:"+k)//undefine

//对象解构赋值
let y={
  o:'111',
  p:'222'
}
let {o,p}=y//解构对象属性没顺序之分，数组有
console.log('o:'+o+" p:"+p)
//特例
let foo='111';
 ({foo}={foo:'222'})
console.log('foo:'+foo)

//字符串解构
var str='qwer'
let [z,x,ccc,v,bbb]=str
console.log('z:'+z+" x:"+x+" ccc:"+ccc+" v:"+v+" bbb:"+bbb)

//通过解构遍历
var obj={
  a:'111',
  b:'222'
}
var ary=[1,2,3]
var hashSet=new Map()
hashSet.set('key--->a','value--->a')
hashSet.set('key--->b','value--->b')
//for of,枚举出每个值,map遍历出的是个数组，所以需要数组解构
//for of不能遍历对象，用for in
for(let a in obj){
  console.log("obj:"+obj[a])
}
for(let a of ary){
  console.log("ary:"+a)
}
for(let [key,value] of hashSet){
  console.log("key:"+key+" value:"+value)
}



