let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas.getContext('2d');
//colocar o ctx como entrada de variavel em todas as funções 
function desenhar_quadrados(ctx, cor,px, py, h, w ){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(px,py,h,w);
    ctx.closePath();
}

function desenhar_linhas(ctx, cor, espessura, movex, movey,linex, liney){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = espessura;
    ctx.moveTo(movex, movey);
    ctx.lineTo(linex,liney);
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(ctx, cor, espessura,coordenadax, coordenaday, t_arco, posicao1, posicao2  ){
    ctx.beginPath();
    ctx.lineWidth = espessura;
    ctx.strokeStyle = cor;
    ctx.arc(coordenadax,coordenaday,t_arco,posicao1*Math.PI,posicao2*Math.PI); 
    ctx.stroke();
    ctx.closePath();
}

function escrever(ctx, espessura, cor, tamanho_font, localizacao, texto, x, y){
    ctx.beginPath();
    ctx.lineWidth = espessura;
    ctx.strokeStyle = cor;
    ctx.font = tamanho_font;
    ctx.textAlign = localizacao;
    ctx.strokeText(texto,x,y);
    ctx.closePath();
}

function retangulo(ctx, cor, px, py, h, w){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(px, py, h, w);

}
