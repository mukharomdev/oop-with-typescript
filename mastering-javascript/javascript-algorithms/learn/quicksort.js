let arr = [2,4,5,6]

// let a = arr.shift()
// console.log(a)
// let b = [a]
// console.log(b)

function quick(arr){
	while(arr.length){
		let len = arr.length
		console.log(len)
		let cur = arr.shift()
		console.log(cur)
	}
}

quick(arr)