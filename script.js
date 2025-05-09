// Esperamos que el documento se cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {

     // Seleccionamos el botón y el campo de entrada
    const checkButton = document.getElementById("check-btn");
    const inputField = document.getElementById("text-input");
    const resultDiv = document.getElementById("result");
    const parrafoDelUsuario = document.querySelector(".user-input");


    // Función para comprobar si es un palíndromo
    function checkPalindrome() {
        // Obtenemos el texto del campo de entrada
        let textoDelUsuario = inputField.value;
        
        // Limpiamos el texto (quitamos espacios y pasamos todo a minúsculas)
        let textoLimpio = textoDelUsuario.replace(/[\W_]/g, '').toLowerCase();

        // Invertimos el texto limpio
        let textoInvertido = textoLimpio.split().reverse().join();

        // Comprobamos si el texto limpio es igual a su versión invertida
        if (textoLimpio === textoInvertido) {
            parrafoDelUsuario.textContent = `${textoDelUsuario} is a palindrome!`;
        } else {
            parrafoDelUsuario.textContent = `${textoDelUsuario} is not a palindrome.`;
        }

        // Mostramos el resultado
        resultDiv.style.display = "block";
    }

    // Agregamos el evento para que se ejecute al presionar el botón
    checkButton.addEventListener("click",checkPalindrome)
});