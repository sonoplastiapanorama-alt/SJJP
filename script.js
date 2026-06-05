// ----Motor do Carrossel de Ministérios----
const listaMinisterios = document.getElementById('listaMinisterios');
const setaEsquerda = document.querySelector('.seta-carrossel.esquerda');
const setaDireita = document.querySelector('.seta-carrossel.direita');

// Define a quantidade de pixels que vai rolar a cada clique
const distanciaRolagem = 250; 

setaEsquerda.addEventListener('click', () => {
    listaMinisterios.scrollBy({ left: -distanciaRolagem, behavior: 'smooth' });
});

setaDireita.addEventListener('click', () => {
    listaMinisterios.scrollBy({ left: distanciaRolagem, behavior: 'smooth' });
});

// ----Motor do Menu Flutuante (Efeito Dynamic Island)----
const header = document.querySelector('header');
const nav = document.querySelector('nav');

// Observador para detetar quando o cabeçalho sai da tela
const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-80px 0px 0px 0px" // O momento exato em que o efeito é ativado
};

const headerObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // Se o cabeçalho saiu da tela, adiciona a classe flutuante
            nav.classList.add('nav-flutuante');
        } else {
            // Se o cabeçalho voltou, o menu volta ao tamanho normal
            nav.classList.remove('nav-flutuante');
        }
    });
}, observerOptions);

headerObserver.observe(header);

// ----Motor do Menu Mobile (Menu Hambúrguer)----
const menuToggle = document.querySelector('.menu-toggle');
const navPrincipal = document.querySelector('nav');
const todosLinks = document.querySelectorAll('.menu-links a');

menuToggle.addEventListener('click', () => {
    // Adiciona ou remove a classe que abre a gaveta
    navPrincipal.classList.toggle('menu-aberto');
    
    // Anima o ícone: troca as 3 barras pelo X
    const icone = menuToggle.querySelector('i');
    if(navPrincipal.classList.contains('menu-aberto')) {
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-xmark');
    } else {
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});

// Fecha a gaveta automaticamente quando um link for clicado
todosLinks.forEach(link => {
    link.addEventListener('click', () => {
        navPrincipal.classList.remove('menu-aberto');
        const icone = menuToggle.querySelector('i');
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    });
});

// Fecha a gaveta automaticamente se o utilizador rolar o ecrã
window.addEventListener('scroll', () => {
    if (navPrincipal.classList.contains('menu-aberto')) {
        navPrincipal.classList.remove('menu-aberto');
        
        // Volta a colocar o ícone das 3 barras
        const icone = menuToggle.querySelector('i');
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }
});