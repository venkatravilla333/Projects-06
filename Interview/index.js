


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


