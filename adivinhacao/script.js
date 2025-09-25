let num_aleatorio = Math.random()
let numeros_pequenos = ''
let numeros_grandes = ''
num_aleatorio = num_aleatorio * 100
num_aleatorio = Math.floor(num_aleatorio)
console.log(num_aleatorio)


function numero_igual(){
    let numero = document.getElementById("numero").value
    console.log(numero)
    if (numero == num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número igual";
        document.getElementById("mensagem_aviso").style.setProperty("background-color", "green");
        let = lista_num_menor = document.getElementById(ten)
    } 
    if (numero < num_aleatorio){
        numeros_pequenos = numero + ', '  + numeros_pequenos
        document.getElementById('ten_pequenas').innerHTML = numeros_pequenos
        document.getElementById("mensagem_aviso").innerHTML = "Número muito baixo";
        document.getElementById("mensagem_aviso").style.setProperty("background-color", "yellow");
    }
    if(numero > num_aleatorio){
        numeros_grandes = numero + ', ' + numeros_grandes 
        document.getElementById('ten_grandes').innerHTML = numeros_grandes
        document.getElementById("mensagem_aviso").innerHTML = "Número muito alto";
        document.getElementById("mensagem_aviso").style.setProperty("background-color", "red");       
    }
}