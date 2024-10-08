
document.getElementById('meuBotao').onclick = function() {
    alert('Mensagem enviada com sucesso!');
};
const botao = document.getElementById('meuBotao');

botao.addEventListener('mouseover', function() {
    botao.style.backgroundColor = 'blue;'; // Cor ao passar o mouse
});

botao.addEventListener('mouseout', function() {
    botao.style.backgroundColor = 'rgb(36, 212, 20);'; // Cor original
});

window.onload = function() {
    document.getElementById('campoTexto').focus(); // Focar no campo de texto
};

