
// callback hell.

// 주문이 들어왔습니다. => 결제 진행 => 결제완료.

// 배달 시작 => 배달이 완료 => 라이더 3000원을 입금.

console.log('주문이 들어왔습니다');

function orderCallBack() {
    console.log('결제 진행중')
    setTimeout(() => {
        console.log('결제완료');
        setTimeout(() => {
            console.log('배달 시작')
            setTimeout(() => {
                console.log('배달완료');
                setTimeout(() => {
                    console.log('홍길동 님에게 3000원이 입금되었습니다');
                }, 3000)
            }, 2000)
        }, 2000)
    }, 3000)
}

orderCallBack();