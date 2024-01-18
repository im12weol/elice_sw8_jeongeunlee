

// 배달 주문이 들어오고 => 결재 => 결재완료 => 배달이 시작

// function orderCallBack() {
//     console.log('결재 진행중');
//     // 결재후 카드사의 결재완료 신호 대기 3초
//     setTimeout(() => {
//         console.log('결제완료')
//     }, 3000)  //  3000... 3초 결제완료가 된다. 
// }

// console.log('주문이 들어왔습니다'); // 1   .... 1
// orderCallBack(); // 2  ...... 3
// console.log('배달 시작');  // 3    ...... 2 

// 비(아닐 비) 동(같을 동) 기 ...... async

// 동(같을 동) 기 ... sync 


function orderCallBack() {
    console.log('결재 진행중')
    setTimeout(() => {
        console.log('결제완료')
        // callback 안에서 callback 을 불러주는것이 동기성을 보장해 줍니다.
        // callback chain
        setTimeout(() => {
            console.log('배달 시작')
        }, 2000)
    }, 3000)
}

console.log('주문이 들어왔습니다'); // 1   .... 1
orderCallBack(); // 2  ...... 3


