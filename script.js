
function alterarCorFundo() {
    var corpoPrincipal = document.getElementById('corpoPrincipal');

    // Verifica a cor atual e decide qual cor definir
    if (corpoPrincipal.classList.contains('cor1')) {
        corpoPrincipal.classList.remove('cor1');
        corpoPrincipal.classList.add('cor2');
    } else {
        corpoPrincipal.classList.remove('cor2');
        corpoPrincipal.classList.add('cor1');
    }

}
document.addEventListener('DOMContentLoaded', function () {
    var imagens = document.querySelectorAll('.corpo .conteudo .imagem img');

    imagens.forEach(function (imagem) {
        imagem.addEventListener('mouseover', function () {
            // Adiciona uma classe para aumentar o destaque
            imagem.classList.add('destaque-imagem');
        });

        imagem.addEventListener('mouseout', function () {
            // Remove a classe ao retirar o mouse
            imagem.classList.remove('destaque-imagem');
        });
    });
});






