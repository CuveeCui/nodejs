let fs = require('fs');

let readStream = fs.createReadStream('logo.png');
let writeStream = fs.createWriteStream('../logo_03.png');


readStream.on('data',chunk => {						// 当有数据流出的时，写入数据
	if (writeStream.write(chunk) === false) { 		// 	如果没有写完，暂停读取流
		readStream.pause();
	}
})

writeStream.on('drain',() => { 						// 写完后，继续读取
	readStream.resume();
})

readStream.on('end',() => {							// 当没有数据时，关闭数据流
	writeStream.end();
})


// 直接使用pipe管道更加方便