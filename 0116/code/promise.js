

const getJson = (resource, callback) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                // callback(undefined, data);
                resolve(data);
            } else if (request.readyState === 4) {
                // callback('통신장애', request.responseText);
                reject('통신불가')
            }
        })

        request.open('GET', resource);
        request.send();
    });
}

getJson('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log(data.id);
        return getJson('https://jsonplaceholder.typicode.com/todos/2')
    }).then(data => {
        console.log(data.id);
        return getJson('https://jsonplaceholder.typicode.com/todoooos/3')
    }).then(data => {
        console.log(data.id);
    }).catch(err => {
        console.log('통신에러로그: ', err)
    })