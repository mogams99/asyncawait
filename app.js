// ! a simple example of asynchronous process
// console.log(`Log Pertama`);
// setTimeout(() => {
//     console.log(
//         `Proses Logging 5 Detik`
//     );
// }, 5000);
// console.log('Log Ketiga');

// ! callback hell
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue';
//             }, 4000);
//         }, 2000);
//     }, 3000);
// }, 5000);
// searchMoviesApi('naruto', function (movies) {
//     saveToMyDB(movies, function () {
//     },
//     () => {
//     });
// });

// ! callback version
// const requestCalback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) failure(`Error: Connection Timeout`);
//         success(`Success: ${url} (${delay}ms)`)
//     }, delay)
// };
// requestCalback(
//     'movie.com', 
//     function(response) {
//         console.log('success', response);
//     },
//     function(error) {
//         console.log('error', error);
//     }
// )
// ! promise version
// const requestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 3000) {
//                 reject(`Error: Connection Timeout`);
//             } else {
//                 resolve(`Success: ${url} (${delay})`);
//             }
//         }, delay);
//     });
// };
// requestPromise('movie.com')
//     .then((result) => {
//         console.log(`Page 1: ${result}`);
//         return requestPromise('movie.com');
//     }).then(() => {
//         console.log(`Page 2: `);
//         return requestPromise('movie.com');
//     }).then(() => {
//         console.log(`Page 3: `);
//         return requestPromise('movie.com');
//     }).catch((err) => {
//         console.error(err);
//     });

// ! a simple example of promise concept
// const examplePromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve(() => {
//             console.log('Success');
//         });
//         reject(() => {
//             console.error('Failed');
//         });
//     });
// }

// ! a simple example of promise implementation
// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// };
// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('black', 1000));

// ! async concept
// const func = async () => {
//     throw "Connection time out";
//     return 'Hello world!';  
// };
// func().then((res) => {
//     console.log('response', res);
// }).catch((err) => {
//     console.error('error', err);
// });

// ! await concept
// async function changeColor() {
//     await delayedColorChange('red', 1000);
//     await delayedColorChange('yellow', 1000);
//     await delayedColorChange('green', 1000);
//     await delayedColorChange('blue', 1000);
//     await delayedColorChange('purple', 1000);
//     await delayedColorChange('orange', 1000);
//     await delayedColorChange('black', 1000);
//     return 'Change color has completed';
// };
// async function printRainbow() {
//     await changeColor();
//     alert('Change color has completed');
// }
// printRainbow();

// ! a simple handler for async await 
// async function requestHandler() {
//     try {
//         let result = await requestPromise('movie.com');
//         console.warn(result);
//     } catch (error) {
//         console.error('message: ', error);
//     }
// }