var operation = ''

function insert(numero){
    operation += numero
    updateFront('resultado', operation)
    return operation
}

function clean(){
    operation = ''
    updateFront('resultado', operation)
    return operation 
}

function back(){
    operation = operation.substring(0, operation.length -1)
    updateFront('resultado', operation)
    return operation
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

function updateFront(element, content){
    document.getElementById(element).innerHTML = content
}

module.exports = {
    insert,
    clean,
    back
}