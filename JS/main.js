var elBtn = document.querySelector('.btn')
var elTitle = document.querySelector('.title')
var elInp = document.querySelector('.inp')






function fn() {
var str = elInp.value
if (str[str.length - 1] == 'a') {
    elTitle.innerHTML = 'Qiz bola'
    elInp.style.borderBottom = '3px solid blue'
}
else if (str[str.length - 1] == 'v') {
    elTitle.innerHTML = "O'g'il bola"
    elInp.style.borderBottom = '3px solid red'

}else{
    elTitle.innerHTML = "Familya emas"
    elInp.style.borderBottom = '3px solid green'

}
   
   
   
}


// function fn() {

//     elInp.value.forEach((item) => {
//         console.log(item);
//     });
       
       
       
//     }


 




































