let fs = require('fs');
fs.watchFile('be_watched.js',(curr, prev) => {
	console.log(111);
})