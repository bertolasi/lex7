// Este é um exemplo simples de script JavaScript
console.log('Script carregado com sucesso!');

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}
