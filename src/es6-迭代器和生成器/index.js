
//声明一个生成器函数
function *test(){
  yield 1
  yield 2
  yield 3
}

var numTest=test()
numTest.next()
numTest.next()
numTest.next()
numTest.next()

for (let i of numTest){
  console.log('内容是：'+i)
}


