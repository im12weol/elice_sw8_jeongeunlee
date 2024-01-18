const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('통신 장애가 발생하였습니다')
    }
})

//http 통신
// 5개의 http 내장함수. GET, POST, PUT, DELETE, PATCH
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();


//GET => 서버로부터 데이터를 받아오는 행동

//   https://기본통신주소/todo
//   https://기본통신주소/..../   

//   https://www.apple.com/cn/
//   https://www.apple.com/jp/
//   https://www.apple.com/kr/

//   https://www.apple.com/:id
//   req.params.id

//  /:param => 국가별 페이지 입니다
// /shop => 판매 페이지입니다.

// https://trends.google.co.kr/trends/explore?date=now%201-d&geo=JP&q=tennis&hl=ko

// req.query.q  
// req.query.hl
// req.query.geo

//   https://www.naver.com/123123123 ==> 오류 ==> 약속된 주소가 없기 때문에