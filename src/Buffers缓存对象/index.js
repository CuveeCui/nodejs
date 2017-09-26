// 纯粹的JavaScript对Unicode很友好，但是二进制数据就不怎么在行了。处理TCP数据流或者文件时，必须要操作二进制数据流。node提供了一些方法来创建、操作和接收二进制数据流。

// 原始的数据保存在Buffer类的实例中。Buffer类似于一个整数数组，不同之处在于它和v8内存堆之外分配的一段内存数据相对应。Buffer对象的大小不能调整。

// Buffer对象是全局对象

// Buffer和JavaScript中string对象之间的转换需要指定编码方式。以下是node支持的各种编码方式：

	// 1、ASCII：应用于7位的ASCII数据。这种编码方式速度很快，会删除字节的高位
	// 2、utf8: Unicode字符。许多网页和文档使用UTF-8
	// 3、binary: 一种只使用每个字符前8个字节将原始的二进制数据编码进字符串的方式（该方式已经废弃，应当尽量使用Buffer对象。）
	// 4、base64: 16进制编码

// new Buffer(size) : 创建指定大小的buffer对象

// new Buffer(Array): 从数组新建buffer对象

// new Buffer(str,encoding='utf8'): 新建一个保存指定字符串的buffer对象

// buffer.write(string,offset=0,encoding='utf8'): 使用指定的编码方式将字符串从指定偏移开始写入buffer，然后返回实际写入的大小。如果部分buffer空间不足，则只会写入部分字符串。

// buffer.toString(encoding,start=0,end=buffer.length): 解码buffer数据并使用指定的编码返回字符串，转换从start参数指定的位置开始，到end结束。

// Buffer.byteLength(string,encoding='utf8'): 返回字符串的实际字节数。这个函数和String.prototype.length不同，后者返回字符串的字符数。

// buffer.length: buffer的大小（以字节为单位）。请注意，这个不是存放在内存的大小，而是分配给buffer对象的内存大小。这个大小不随buffer中存放的内容的多少而改变。

// buffer.copy(tarfetStart,sourceTarget,sourceEnd=buffer.length): 在两个buffer之间执行内存拷贝。例如：新建两个buffer对象，然后将buffer1中16至19字节拷贝到buffer2中第八字节开始的空间中。

// buffer.slice(start,end): 返回和老的buffer引用同一段内存的新buffer对象，但是开始和结束的位置由start和end参数指定。修改新的buffer对象将会改动原来的buffer。
