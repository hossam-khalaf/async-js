const fs = require('fs')

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

// async/await
