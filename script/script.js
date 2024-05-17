// let btn0 = document.querySelectorAll('[value]')[9]
// let btn1 = document.querySelectorAll('[value]')[6]
// let btn2 = document.querySelectorAll('[value]')[7]
// let btn3 = document.querySelectorAll('[value]')[8]
// let btn4 = document.querySelectorAll('[value]')[3]
// let btn5 = document.querySelectorAll('[value]')[4]
// let btn6 = document.querySelectorAll('[value]')[5]
// let btn7 = document.querySelectorAll('[value]')[0]
// let btn8 = document.querySelectorAll('[value]')[1]
// let btn9 = document.querySelectorAll('[value]')[2]


let buttons = document.getElementsByTagName('button')
let display = document.querySelector('#display')
let calcString = '';
// let multipy = document.querySelector('.button.multiply')
// let add = document.querySelector('.button.add')
// let subtract = document.querySelector('.button.subtract')
// let divide = document.querySelector('.button.division')
// let clear = document.querySelector('.button.clear')
//let equal = document.querySelector('.button.equal')

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        calcString = event.target.innerText;

        if (calcString == 'C') {
            display.innerText = '0';
        } else if(calcString == "="){
            calculation(display.innerText)
        }else {
                display.innerText=='0'?display.innerText = calcString:display.innerText += calcString;
                
        }
        // else {
        //     if (display.innerText == '0') {
        //         display.innerText = calcString;
        //     }
            
        // }
    })}


function calculation(calcString) {
    // console.log(calcString);
    display.innerText = eval(calcString)
}




