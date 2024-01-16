const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log("통신 장애가 발생하였습니다.");
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();