const output = document.querySelector("#output");

let arr = [1, 2, 3, 4];

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arr);
    }, 1000);
});

p1.then((data) => {

    let res = data.filter((ele) => ele % 2 === 0);
    let str = res.join(",");

    output.innerText =res

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 3000);
    });

}).then((data) => {

    let res = data.map((ele) => ele * 2);
    let str = res.join(",");

    output.innerText=str

}).catch((err) => {
    console.log(err);
});


