//dom

const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const codeqr = document.querySelector('#codeqr')

//evento

botao.addEventListener('click', gerador)
url;addEventListener('keypress' , function(event){
    if(event.key == 'Enter'){
        gerador()
    }
})

//função
 function gerador(){
    codeqr.innerHTML = ''
    new QRCode(codeqr, {
        text:url.value,
        width : 300,
        height: 300
    })
 }
