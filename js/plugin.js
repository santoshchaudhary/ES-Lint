let getBooks = new Promise((resolve) => {
    resolve('Books Get!');
});
getBooks().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
}); 