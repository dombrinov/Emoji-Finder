const promise = new Promise((resolve, reject) => {
    // resolve(100)
    // reject(Error("err"))
    setTimeout(() => {
        resolve(100)
        // reject(Error("no data"))
    }, 3000)
})

// promise.then((data) => console.log(data), (err) => console.log(err))
// promise.then((data) => console.log(data)).catch((err) => console.log(err))

// console.log(promise);


// fetch

// const response = fetch("https://emoji.ymatuhin.workers.dev/")

//1 sposob .tnen().then()
// response.then((res) => res.json()).then((data) => console.log(data))
// response.then((res) => {
//     if (res.status == 200) {
//         return res.json()
//     }
//     // return 100
// }).then((data) => console.log(data))
// console.log(response);

//2 sposob
async function getData() {
    try {
        var response = await fetch("https://emoji.ymatuhin.workers.dev/")
        console.log(response)
        var data = await response.json()
    }
    catch(e) {
        console.log(e)
    }
    return data
}

const result = await getData()
console.log(result)

//3 sposob
// const response = await fetch("https://emoji.ymatuhin.workers.dev/")
// const data = await response.json()
// console.log(data)

// var response = await fetch("https://emoji.ymatuhin.workers.dev/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({name: "Vasya"})
//         })