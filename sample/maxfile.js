// 遍历目录，找出最大的一个文件
// https://www.imooc.com/video/16611

const fs = require('fs');
const path = require('path');

function findLargest(dir, callback) {
    // try {..  此处是没有任何意义的,都不是一个执行栈
    fs.readdir(dir, function (err, files) {
        if (err) return callback(err); // [1] 问题:正常来说发生错误,应该直接抛出,外层try.catch捕获错误,并且给出适当处理
                                       // dir的callback是读dir完成之后才被系统回调执行的 于是 它fs.readdir不处于统一执行栈
                                       // 异步回调操作当中我们没有办法正常去使用try.catch这样的错误处理机制,  我们使用callback就行了
        
        let count = files.length;      // [2] js是有闭包的 这个count也能里面其他的函数改变
        let errored = false;
        let stats = [];
        files.forEach( file => {       // 数组的forEach是同步回调 理论上抛出一个err就能终止循环的
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return;   // [1] 但这个类似上面的cb不在用一个执行栈
                if (err) {
                    errored = true;    // 通过记录的方式  if (errored) return;只是不处理而不是终止循环
                    return callback(err);
                }
                stats.push(stat);     // [2] 一样的也能里面其他的函数改变

                if (--count === 0) {
                    let largest = stats
                        .filter(function (stat) { return stat.isFile(); })
                        .reduce(function (prev, next) {
                            if (prev.size > next.size) return prev;
                            return next;
                        });
                    callback(null, files[stats.indexOf(largest)]);
                }
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