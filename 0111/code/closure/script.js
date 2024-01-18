
let a0 = 'a0'

// dynamic scope 
// function fn2() {
//     let a2 = 'a2';
//     console.log(a0, a1, a2);
// }


// static scope, lexical scope
function fn1() {
    function fn2() {
        let a2 = 'a2';
        console.log(a0, a1, a2);
    }
    let a1 = 'a1';
    console.log(a0, a1);
    fn2();
}


fn1();