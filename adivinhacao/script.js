let num_aleatorio = Math.random()
let soma = '';
let novo_valor
num_aleatorio = num_aleatorio * 100
num_aleatorio = Math.floor(num_aleatorio)
console.log(num_aleatorio)


function somatorio(){
    novo_valor = document.getElementById("numero");
    soma = document.getElementById('ten_pequenas').value + "-" + novo_valor;
    document.getElementById("ten_pequenas").value = soma
}


function numero_igual(){
    let numero = document.getElementById("numero").value
    console.log(numero)
    if (numero == num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número igual";
        document.getElementById("mensagem_aviso").style.setProperty("background-color", "green");
        let = lista_num_menor = document.getElementById(ten)
    } 
    if (numero < num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número muito baixo";
        document.getElementById("mensagem_aviso").style.setProperty("background-color", "red");
    }
    if(numero > num_aleatorio){
        document.getElementById("mensagem_aviso").innerHTML = "Número muito alto";
        document.getElementById("mensagem_aviso").style.setProperty("background-color", "red");       
    }
}