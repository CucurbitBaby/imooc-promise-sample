// 遍历目录，找出最大的一个文件
// https://www.imooc.com/video/16611

const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {

// try {..  此处是没有任何意义的,都不是一个执行栈 
    // fs.readdir(path, [callback(err,files)])  
    // callback   回调，传递两个参数 err 和 files，files是一个包含 “ 指定目录下所有文件名称的” 数组。
    fs.readdir(dir, function (err, files) {
        if (err) return callback(err); // [1] 问题:正常来说发生错误,应该直接抛出,外层try.catch捕获错误,并且给出适当处理
                                       // dir的callback是读dir完成之后才被系统回调执行的 于是 它fs.readdir不处于统一执行栈
                                       // 异步回调操作当中我们没有办法正常去使用try.catch这样的错误处理机制,  我们使用callback就行了
        // console.log('执行一次')
        // console.log(files)          // [ '1.txt', '2.txt', '3.txt', '4.txt' ]
        let count = files.length;      // [2] js是有闭包的 这个count也能里面其他的函数改变
        let errored = false;
        let stats = [];
        files.forEach( file => {       // 数组的forEach是同步回调 理论上抛出一个err就能终止循环的
            // console.log('执行了4次, 因为这个回调函数实在readdir执行完了,系统才会执行')     

            // fs.stat(path, callback);
            // path, 要查看目录/文件的完整路径及名；
            // [callback(err, stats)], 操作完成回调函数；err错误对象，stat fs.Stat一个对象实例，
            // 提供如:isFile, isDirectory,isBlockDevice等方法及size,ctime,mtime等属性
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return;   // [1] 但这个类似上面的cb不在用一个执行栈
                if (err) {
                    errored = true;    // 通过记录的方式  if (errored) return;只是不处理而不是终止循环******
                    return callback(err);
                }
                stats.push(stat);      // [2] 一样的也能里面其他的函数改变

                if (--count === 0) {
                    let largest = stats
                        .filter(function (stat) { return stat.isFile(); })
                        .reduce(function (prev, next) {
                            if (prev.size > next.size) return prev;
                            return next;
                        });
                    callback(null, files[stats.indexOf(largest)]);
                }

/*

    filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
    callback
    用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
        element   数组中当前正在处理的元素。
        index可选 正在处理的元素在数组中的索引。
        array可选 调用了 filter 的数组本身。

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

    reducer 函数接收4个参数:
        Accumulator (acc)   (累计器)
        Current Value (cur) (当前值)
        Current Index (idx) (当前索引)
        Source Array (src)  (源数组)
    语法: arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
    参数
        callback    执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
            accumulator 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
            currentValue   数组中正在处理的元素。
            index 可选        数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
            array可选             调用reduce()的数组
            initialValue可选          作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

*/
            });
        });
    });
}

findLargest('./path/to/dir', function (err, filename) {
    if (err) return console.error(err);
    console.log('largest file was:', filename);
});

/*
1.嵌套层次很深
2.无法正常使用return和throw
3.无法检索堆栈信息
4.多个回调之间难以建立联系
//*/