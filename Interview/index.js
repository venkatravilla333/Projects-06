


// == & ===

// console.log('Sachin' == 'Sachin')
// console.log('Sachin' === 'Sachin')
// console.log(null == undefined)
// console.log(null === undefined)
// console.log({} == {})
// console.log({value: 10} == {value:10})
// console.log([] == [])

// var x = {}
// var y = {}
// var y = x

// console.log(x==y)
// console.log(x===y)

// find the data type

// var a = 'sachin'
// var b = 100
// var c = true
// var d
// console.log(a, typeof a)
// console.log(d, typeof d)
// var e = null
// console.log(e, typeof e)

// console.log(null == {})
// console.log(typeof(null) === typeof({}))


// function test(name='sachin',  age=undefined) {
//   console.log(name)
//   console.log(age)
// }
// test(undefined, 100)

//varying no of params vs arguments

//arguments object (ES-5)

// function test(a) {
//   console.log(arguments, typeof arguments)
//   console.log(Array.isArray(arguments))
//   console.log((arguments[0]))
//   console.log((arguments[1]))
//   console.log((arguments[2]))
//   console.log((arguments[3]))
//   console.log(a)

//   for (var value of arguments) {
//     console.log(value)
//   }

// }
// test(1,2, 3, 4)

//rest operator (ES-6)

// var x = (a,...rest)=> {
//   console.log(rest)
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
//   console.log(rest[4])
//   for (var value of rest) {
//     console.log(value)
//   }
// }
// x(1,2,3, 4,5)

//scope

// var a = 1
// let b = 2
// const c = 3

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   var d = 4
//   let e = 5
//   const f = 6

//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
//   if (true) {
//     var g= 7
//     let h = 8
//     const i = 9
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }

//   console.log(g)
//   // console.log(h)
//   // console.log(i)

// }

// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)
// // test()



// {
//   let x = 10
//   // let y = 20
//   // const z = 30
//   // console.log(x)
//   // console.log(y)
//   // console.log(z)
// }
// function test() {
//   console.log(x)
// }
// test()
// console.log(x)
//   // console.log(y)
//   // console.log(z)
// console.log(a())
// const a = ()=>{}
// console.log(a())

// console.log(declare())
// function declare() {
// }
// console.log(declare())

//var vs let vs const

//redeclaration

// var x = 10
// console.log(x)

// var x = 100
// let x = 100
// const x = 100
// console.log(x)

//re assignment

// var x = 10
// let x = 10
// const x = 10
// console.log(x)
// x = 'sachin'
// console.log(x)

//initialization

// var x
// let x
// const x
// console.log(x)

// closure


// function outer() {
//  var x = 100
//   function inner() {
//     console.log(x)
//   }
//   return inner
// }

// var inner = outer()
// inner()


//local storage vs session storage
//set

// var lsetBtn = document.getElementById('lset')

// var lsetFun = () => {
//   window.localStorage.setItem('name', 'sachin')
//   window.localStorage.setItem('age', 40)
// }

// lsetBtn.addEventListener('click', lsetFun)

// // get
// var lgetBtn = document.getElementById('lget')

// var lgetFun = () => {
//   console.log(window.localStorage.getItem('name'))
//   console.log(window.localStorage.getItem('age'))
// }

// lgetBtn.addEventListener('click', lgetFun)

// //remove item

// var lremoveBtn = document.getElementById('lremove');

// var lremoveFun = () => {
//   window.localStorage.removeItem('name')
//   window.localStorage.removeItem('age')
// };

// lremoveBtn.addEventListener('click', lremoveFun);

// //clear

// var lclearBtn = document.getElementById('lclear');

// var lclearFun = () => {
//   window.localStorage.clear();
  
// };

// lclearBtn.addEventListener('click', lclearFun);

// // session

// // set
// var ssetBtn = document.getElementById('sset')

// var ssetFun = () => {
//   window.sessionStorage.setItem('name', 'dhoni')
//   window.sessionStorage.setItem('age', 30)
// }

// ssetBtn.addEventListener('click', ssetFun)

// //get

// var sgetBtn = document.getElementById('sget');

// var sgetFun = () => {
//   console.log(window.sessionStorage.getItem('name'));
//   console.log(window.sessionStorage.getItem('age'));
// };

// sgetBtn.addEventListener('click', sgetFun);

// //remove item

// var sremoveBtn = document.getElementById('sremove');

// var sremoveFun = () => {
//   // window.sessionStorage.removeItem('name');
//   window.sessionStorage.removeItem('age');
// };

// sremoveBtn.addEventListener('click', sremoveFun);

// //clear

// var sclearBtn = document.getElementById('sclear');

// var sclearFun = () => {
//   window.sessionStorage.clear();
// };

// sclearBtn.addEventListener('click', sclearFun);


//copy or clone

// import lodash from 'lodash'
// var lodash = require('lodash')

// primitives

// var x = 10

// var y = x

// y = 20

// console.log(x)
// console.log(y)

//reference (object)

// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: () => {
    
//   }
// }

// var copiedObj = originalObj //normal copy
// var copiedObj = Object.assign({}, originalObj)//shallow copy
// var copiedObj = {...originalObj}//shallow copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201
// console.log(originalObj)
// console.log(copiedObj)


//Mis functions


//first class function and HOF and CBF

// var x = function test(y) {
//   console.log('HOF')
//   y()
//   return function z() {
//     console.log('Z fun')
//   }
// }

// var Z = x(function y() {
//   console.log('CBF')
// })

// Z()


//pure vs impure

// function pure(a,b,c) {
//   var result = a + b + c
//   return result
// }

// console.log(pure(1, 2, 3))

// function impure(a, b, c) {
  
//   var d = Math.random()
//   var result = a+b+c+d
//   return result
// }
// console.log(impure(1,2,3))

//IIFE (ES-5) (ES-6 MODULES)

// (() => {
//   var a = 10
  
//   var b = function () { }
// })()

// console.log(a)

//Function currying

// without curry

// function test(a,b,c) {
//   console.log(a+b+c)
// }
// test(1,2,3)

// with curry

// function test1(a) {
//   return function test2(b) {
//     return function test3(c) {
//       console.log(a+b+c)
//     }
//   }
// }

// test1(1)(2)(3)


// function calPrice(price, dis) {
//   var disAmount = price * dis
//   return disAmount
// }

// console.log(calPrice(1000, .1))
// console.log(calPrice(1000, .2))
// console.log(calPrice(1000, .3))
// console.log(calPrice(1000, .4))
// console.log(calPrice(1000, .5))

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmount = price * dis
//     return disAmount
//   }
// }

// var calDis = calPrice(1000)
// console.log(calDis(.1))
// console.log(calDis(.2))
// console.log(calDis(.3))
// console.log(calDis(.4))
// console.log(calDis(.5))

//DOM

// var parent = document.getElementById('parent')
// var child = document.getElementById('child')
// var subchild = document.getElementById('subchild')

// var parentFun = (x) => {
//   console.log('parent')
//   console.log(x)
// }
// var childFun = (x) => {
//   console.log('child')
//   console.log(x)
// }
// var subchildFun = (x) => {
//   console.log('sub child')
//   console.log(x)
//   x.stopPropagation()
//   console.log(x.target)
//   console.log(x.clientX)
//   console.log(x.clientY)
//   console.log(x.offsetX)
//   console.log(x.offsetY)
  
// }

//bubbling

// parent.addEventListener('click', parentFun, false)
// child.addEventListener('click', childFun, false)
// subchild.addEventListener('click', subchildFun, false)

//capturing

// parent.addEventListener('click', parentFun, true)
// child.addEventListener('click', childFun, true)
// subchild.addEventListener('click', subchildFun, true)

//event delegatin

// var table = document.getElementById('table')

// var tableFun = () => {
//   console.log('clicked')
// }

// table.addEventListener('click', tableFun)
