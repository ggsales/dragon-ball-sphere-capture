var altura = 0 
var largura = 0 

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
        
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //cria elemento html
    var esfera = document.createElement('img')
    esfera.src = 'imagens/esfera.png'
    esfera.className = tamanhoAleatorio()
    esfera.style.left = posicaoX + 'px'
    esfera.style.top = posicaoY + 'px'
    esfera.style.position = 'absolute'

    document.body.appendChild(esfera)

    tamanhoAleatorio()
}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)


    switch(classe){
        case 0:
            return 'esfera1'
        case 1:
            return 'esfera2'
        case 2:
            return 'esfera3'
    }
    console.log(classe)
}