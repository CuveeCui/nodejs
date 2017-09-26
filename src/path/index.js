console.log('__filename',__filename);
// 当前正在执行的脚本的文件名。此为绝对路径，且和命令行参数所指定的文件名不一定相同
console.log('__dirname',__dirname);
// 当前执行脚本的文件夹

// Path: 此模块包含很多用于处理文件路径的小工具。可以通过require('path')使用该模块。提供了如下函数：

	// path.join([path1],[path2],[...]): 将所有参数连接在一起并解析生成新的路径。
	// path.normalizeArray(arr): 转化路径的各部分，将'..'和'.'替换为实际的路径。
	// path.normalize(p): 转化路径字符串，将'..'和'.'替换为实际的路径
	// path.dirname(p): 返回路径中代表文件夹的部分，同Unix的dirname命令类似
	// path.basename(p): 返回路径中的最后一部分。同Unix的basename类似
	// path.extname(p): 返回路径中文件的后缀名，即路径中的最后一个'.'之后的部分。如果一个路径中并不包含'.'或改路径只包含一个'.'且这个'.'为路径的第一个字符，则此命令返回空字符串。
	// path.exists(p,[callback]: 检测给定的文件路径是否存在。然后传递结果（true或false）给回调函数

