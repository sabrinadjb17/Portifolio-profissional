let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Baby Yoda
let babyYoda = {
    img: new Image(),
    x: 0,
    y: 0,

    desenha: function() {
        ctx.save(); // salva o estado atual
        ctx.translate(canvas.width, canvas.height); 
        ctx.drawImage(this.img, -130, -130, 140, 140); 
        ctx.restore(); // volta ao estado original
    }
};
babyYoda.img.src = 'img/baby_yoda.png';

babyYoda.img.onload = function() {
    babyYoda.desenha();
};


// Bolinha
let bolinha = {
    img: new Image(),
    x: 50,
    y: 50,
    largura: 10,
    altura: 10,

    desenha: function() {
        ctx.drawImage(this.img, this.x, this.y, 50, 50); // largura e altura em pixels
    }
};

bolinha.img.src = 'img/bola-acero.png';

bolinha.img.onload = function() {
    bolinha.desenha();
};

document.addEventListener('mousemove', function(evento){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let rect = canvas. getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left - 25;
    let y_mouse = evento.clientY - rect.top - 15;
    console.log(x_mouse, y_mouse);

    bolinha.x = x_mouse;
    bolinha.y = y_mouse;

    let buffer = 25
    // direita
    if (bolinha.x >= 300 - bolinha.largura - buffer){
        bolinha.x = 300 - bolinha.largura - buffer
    }
    // esquerda
    if (bolinha.x <= 0){
        bolinha.x = -15
    }
    // em cima
    if (bolinha.y <= 0){
        bolinha.y = 0
    }
    // em baixo
    if (bolinha.y >= 300 - bolinha.altura - buffer){
        bolinha.y = 300 - bolinha.altura - (buffer - 10)
    }

    bolinha.desenha();
    babyYoda.desenha();
});

