
//数组的创建方式

//array.of
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// 参数值可为不同类型
console.log(Array.of(1, '2', true)); // [1, '2', true]
// 参数为空时返回空数组
console.log(Array.of()); // []


//array.from
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]
// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]

// arrayLike
// 想要转换的类数组对象或可迭代对象。
let arr1=Array.from([1,2,3],n=>n*n)
console.log("使用array.from做运算，返回一个新数组",arr1)

//类数组对象
//类数组对象必须包含length属性，同时属性值为0,1,2...
let arr2=Array.from({
    0:1,
    1:2,
    length:5
})
console.log('使用array.from转换类数组对象，',arr2)//长度由length决定

//转换可迭代对象

//转字符串
console.log(Array.from('name'))

//转换set
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(Array.from(set)); // [1, 2, 3]

//扩展的方法

//find,返回第一个查找到的值，findIndex找到第一个值的索引
console.log("find找到第一个值，",[1,4,5].find(y=>y>3))
console.log("findIndex找到第一个索引，",[1,4,5].findIndex(x=>x>3))

//fill()
//将一定范围索引的数组元素内容填充为单个指定的值
let arr3 = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr3.fill(0,1,2)); // [1, 0, 3, 4]

//新增的遍历entries()
// 不使用 for... of 循环
let entries = ['a', 'b'].entries();
console.log(entries.next().value); // [0, "a"]
console.log(entries.next().value); // [1, "b"]

//inclues()
//如果查找到有值返回true
console.log("使用inclues查看是否有值",[1,2,3].includes(2)) //true
console.log("使用inclues加上索引限制查看是否有值",[1,2,3].includes(2,2)) //false

//flat()
//不管嵌套多少层数组，转义为数组
console.log("使用flat转换为一维数组",[1, [2, [3, [4, 5]]]].flat(Infinity))

//复制数组
//使用扩展运算符
let arr5 = [1, 2],
    arr6 = [...arr5];
console.log(arr6); // [1, 2]
arr5[0]=11
console.log(arr6); // [1, 2]，说明是深拷贝

//数组合并
console.log([...[1, 2],...[3, 4]]); // [1, 2, 3, 4]