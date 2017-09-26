let fs = require('fs');

let readStream = fs.createReadStream('logo.png');
let writeStream = fs.createWriteStream('../logo_02.png');

readStream.on('data',chunk => {
	writeStream.write(chunk);
})

readStream.on('end',() => {
	writeStream.end();
})

//这种写法有一个问题，如果写入的速度跟不上读取的速度，有可能导致数据丢失。正常的情况应该是，写完一段，再读取下一段，如果没有写完的话，就等待读取流先暂停。