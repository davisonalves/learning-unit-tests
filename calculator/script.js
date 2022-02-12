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
    if(operation){
        operation = eval(operation)
        updateFront('resultado', operation)
    }
    else{
        operation = ''
        updateFront('resultado', operation)
    }
    return String(operation)
}

function updateFront(element, content){
    document.getElementById(element).innerHTML = content
}

module.exports = {
    insert,
    clean,
    back,
    calc
}