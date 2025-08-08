document.addEventListener('DOMContentLoaded', () => {
    const btnAcesso = document.getElementById('btn-acesso');
    const listaAcesso = document.getElementById('lista-acesso');

    btnAcesso.addEventListener('click', () => {
        listaAcesso.classList.toggle('mostrar');
    });

    const btnMaisFonte = document.getElementById('mais-fonte');
    const btnMenosFonte = document.getElementById('menos-fonte');
    const btnContraste = document.getElementById('modo-contraste');

    btnMaisFonte.onclick = () => {
        document.body.style.fontSize = 'larger';
    };

    btnMenosFonte.onclick = () => {
        document.body.style.fontSize = 'smaller';
    };

    btnContraste.onclick = () => {
        document.body.classList.toggle('contraste-ativo');
    };
});
