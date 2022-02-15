//syntax
// let myPromise = new Promise(function(reslove,reject){
//     //code

// })

// let promise = new Promise(function (reslove, reject) {

//     const a = 2;
//     const b = 4;

//     if (a === b) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise
//     .then(function () {
//         console.log("Equal");
//     })
//     .catch(function () {
//         console.log("Error/ Not Equal");
//     });


// promise.catch(function () {
//     console.log("Error Not Equal");
// });

//=================================================================
let promise = new Promise(function (resolve, reject) {
    const a = 4;
    const b = 4;

    if (a === b) {
        resolve('Yes they are Equal');
    } else {
        reject(" No the values are not Equal");
    }
});

promise
    .then(function (data) {
        console.log('result coming from Resolve Method->' + data);
    })
    .catch(function (err) {
        console.log('result coming from Reject Method->' + err);
    });





    