const fs = require('fs')
const fetch = require('node-fetch')

// callbacks

// setTimeout
// setTimeout(() => {
// 	console.log('wait 1 sec')
// }, 1000)

// nested setTimeouts => callback hell
// setTimeout(() => {
// 	console.log(3)
// 	setTimeout(() => {
// 		console.log(2)
// 		setTimeout(() => {
// 			console.log(1)
// 		}, 1000)
// 	}, 1000)
// }, 1000)

// button event handler in browser
// const btn
// btn.addEventListener('click', () => {

// })

// error first callback
// fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
// 	if (err) {
// 		console.log('ERROR')
// 		console.error(err)
// 	} else {
// 		console.error('Got data')
// 		console.log(data)
// 	}
// })

// promises
//Create a promise
// const myPromise = new Promise((resolve, reject) => {
// 	const rand = Math.floor(Math.random() * 2)
// 	if (rand === 0) {
// 		resolve()
// 	} else {
// 		reject()
// 	}
// })

// myPromise
// 	.then(() => console.log('Success'))
// 	.catch(() => console.error('Something went wrong'))

// fs readFile with promises
// fs.promises
// 	.readFile('./test.txt', { encoding: 'utf-8' })
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err))

// // fetch with promises
// fetch('http://pokeapi.co/api/v2/pokemon/ditto')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err))

// async/await
