let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Baby Yoda
let babyYoda = {
    img: new Image(),
    x: 0,
    y: 0,

    desenha: function() {
        ctx.save(); // salva o estado atual
        ctx.translate(canvas.width, canvas.height); // move o ponto para o canto inferior direito
        ctx.drawImage(this.img, -130, -130, 140, 140); // desenha a imagem redimensionada
        ctx.restore(); // volta ao estado original
    }
};

// define o caminho da imagem
babyYoda.img.src = 'img/baby_yoda.png';

// desenha depois que a imagem carregar
babyYoda.img.onload = function() {
    babyYoda.desenha();
};

// Bolinha
let bolinha = {
    img: new Image(),
    x: 50,
    y: 50,

    desenha: function() {
        ctx.drawImage(this.img, this.x, this.y, 50, 50); // largura e altura em pixels
    }
};

bolinha.img.src = 'img/bola-acero.png';

bolinha.img.onload = function() {
    bolinha.desenha();
};


function ativarMouse() {
  canvas.addEventListener('mousemove', function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    // centraliza a bolinha no cursor (metade da largura/altura)
    bolinha.x = x_mouse - bolinha.width / 2;
    bolinha.y = y_mouse - bolinha.height / 2;

    // redesenha a cena
    desenhaTudo();
  });
}

// canvas.addEventListener('mousemove', function(evento) {
//     let rect = canvas.getBoundingClientRect();
//     let x_mouse = evento.clientX - rect.left;
//     let y_mouse = evento.clientY - rect.top;

//     // centraliza
//     let novoX = x_mouse - bolinha.width / 2;
//     let novoY = y_mouse - bolinha.height / 2;

//     // limita dentro do canvas
//     if (novoX < 0) novoX = 0;
//     if (novoY < 0) novoY = 0;
//     if (novoX > canvas.width - bolinha.width) novoX = canvas.width - bolinha.width;
//     if (novoY > canvas.height - bolinha.height) novoY = canvas.height - bolinha.height;

//     bolinha.x = novoX;
//     bolinha.y = novoY;

//     desenhaTudo();
// });
