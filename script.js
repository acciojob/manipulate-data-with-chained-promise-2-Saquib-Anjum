const output = document.querySelector("#output");

let arr = [1, 2, 3, 4];

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arr);
    }, 1000);
});

p1
    .then((data) => {
        // First transformation: filter even numbers
        let res = data.filter((ele) => ele % 2 === 0);

        // Display after 1 second
        output.innerText = res;

        // Wait another 2 seconds
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(res);
            }, 2000);
        });
    })
    .then((data) => {
        // Second transformation: multiply by 2
        let res = data.map((ele) => ele * 2);

        // Display final result
        output.innerText = res;
    })
    .catch((err) => {
        console.log(err);
    });