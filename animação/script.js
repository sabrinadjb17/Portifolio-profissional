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
