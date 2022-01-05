// Exemplo Promise ---------------------------------------------
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('Resolvida!');
    }, 2000);
})

// Encadiando algumas chamadas
await myPromise
        .then((result) => result + 'passando pelo ten')
        .then((result) => result + 'e agora acabou!')
        .catch((err) => console.log(err.message));

// Usando async await -------------------------------------------

async function resolvePromise() {
    const myPromise2 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 4000);
    });

    const resolved = await myPromise2
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message))

    return resolved;
}

// Usando try catch

async function resolvePromise2() {
    const myPromise3 = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 6000);
})

let result;

    try {
        result = await myPromise3
            .then((result) => result + ' passando pelo then')
            .then((result) => result + 'e agora acabou')
    }   catch(err){
                result = err.message
            }
        return result;
    }


// Fetch
// retorna uma promise

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

// Exemplo de operacores no banco usando o fetch

fetch('https://endereco-api.com/', {
    method: 'GET', 
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))

//Precisar converter o JSON sempre quando for post
    fetch('https://endereco-api.com/', {
        method: 'POST', 
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(json => console.log(json))



