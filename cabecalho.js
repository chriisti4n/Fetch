document.addEventListener('DOMContentLoaded', function () {
    const texto = "Lista de Animais!";
    const textoh1 = document.getElementById('textoh1');

    let index = 0;

    function mostrarLetra() {
        if (index < texto.length) {
            textoh1.textContent += texto.charAt(index);
            index++;
            setTimeout(mostrarLetra, 150);
        }
    }

    mostrarLetra();
});

