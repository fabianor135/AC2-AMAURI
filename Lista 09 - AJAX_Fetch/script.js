const menuLinks = document.querySelectorAll('.menu-lateral a');
const conteudoSecoes = document.querySelectorAll('section');

menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita a navegação para outra página

        const secaoId = this.getAttribute('href');
        const secao = document.querySelector(secaoId);

        conteudoSecoes.forEach(secaoAtual => {
            secaoAtual.style.display = 'none';
        });

        secao.style.display = 'block';
    });
});
