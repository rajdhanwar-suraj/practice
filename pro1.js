let btn = document.getElementsByClassName('btn')[0];
let border = document.getElementsByClassName('table')[0]

let changeBorder = ()=>{
    border.style.borderColor = 'red'
    border.style.color = 'red'
}


btn.addEventListener('click', changeBorder);