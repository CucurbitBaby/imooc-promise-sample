// Promise.reject() 不认 thenable
// https://www.imooc.com/video/16626


let promise = Promise.reject('something wrong');

promise
    .then( () => {
        console.log('it\'s ok');
    })
    .catch( () => {
        console.log('no, it\'s not ok');

        return Promise.reject({
            // then() {         // 不认识thenable
            //     console.log('it will be ok');
            // },
            // catch() {
            //     console.log('not yet');
            // }
        });
    });

    