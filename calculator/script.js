function insert(numero){
    var numero2 = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero2 + numero
}

function clean(){
    document.getElementById('resultado').innerHTML = ""
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calc(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = "Vazio"
    }
}

module.exports = insert, clean, back, calc