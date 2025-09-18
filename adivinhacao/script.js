let num_aleatorio = Math.random()
num_aleatorio = num_aleatorio * 100
num_aleatorio = Math.floor(num_aleatorio)
console.log(num_aleatorio)

function numero_igual(){
    let numero = document.getElementById("numero").value
    console.log(numero)
    if (numero == num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número igual"
    } 
    if (numero < num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número muito baixo"
    }
    if(numero > num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número muito alto"
    }
}