


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