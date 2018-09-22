var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b == 'number') {
                resolve(a+b)
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}
/***********if first fail then second onSuccess runs and prints undefined*******/
// asyncAdd(3,'6').then((res) => {
//         //onSuccess
//         console.log('Result: ', res)
//         return asyncAdd(res, 33)
// },
// // onError
// (errorMessage) => {
//     console.log(errorMessage)
// }).then((res) => {
//     console.log('Final Result: ',res)
// }, (errorMessage) => {
//     console.log(errorMessage)
// })

asyncAdd(3,'6').then((res) => {
    //onSuccess
    console.log('Result: ', res)
    return asyncAdd(res, 33)
}).then((res) => {
console.log('Final Result: ',res)
}).catch((errorMessage) => {
    console.log(errorMessage)
})



// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //either functions fire only once 
//         //resolve('Hey... It worked!')
//         reject('Unable to fulfil promise')
//     }, 2500)
    
// })


// somePromise.then((message) => {
//     // on SuccessMethod
//     console.log('Success: ', message)
// }, (errorMessage) => {
// // onErrorMethod
// console.log('Error: ', errorMessage)
// })