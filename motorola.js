document.addEventListener("DOMContentLoaded", function() {
    // Tempo em milissegundos antes de esconder a tela de abertura (3000ms = 3 segundos)
    setTimeout(function() {
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        // Espera a transição de opacidade antes de esconder completamente
        setTimeout(function() {
            splashScreen.style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 1000); // Tempo de espera deve coincidir com a duração da transição CSS
    }, 700); // Tempo de exibição da tela de abertura
});