let btn = document.getElementsByClassName('btn')[0];
let border = document.getElementsByClassName('table')[0]

let changeBorder = ()=>{
    border.style.borderColor = 'red'
}


btn.addEventListener('click', changeBorder);