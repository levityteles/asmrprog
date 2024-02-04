ScrollReveal().reveal('.wallets', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.break1', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.quadro', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.container-footer', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.text-footer', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.section1', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

// lOEADER ANIMATION 

setTimeout(function () {
    $('#load').fadeToggle();
}, 1500);

//  ENCERRAMENTO ANIMATION

// function toggleTheme() {
    //     let element = document.body;
    //     element.classList.toggle("darkMode");
    // }
    
    function toggleTheme() {
        let element = document.body;
        let themeIcon = document.getElementById('themeIcon');
      
        // Alterna entre o tema escuro e claro
        element.classList.toggle("darkMode");
      
        // Verifica se o tema atual é escuro
        if (element.classList.contains('darkMode')) {
          // Se for escuro, alterna para o ícone do sol
          themeIcon.classList.remove('ph-moon');
          themeIcon.classList.add('ph-sun');
        } else {
          // Se for claro, alterna para o ícone da lua
          themeIcon.classList.remove('ph-sun');
          themeIcon.classList.add('ph-moon');
        }
      }