document.addEventListener("DOMContentLoaded", function() {

    const checkButton = document.getElementById("check-btn");
    const inputField = document.getElementById("text-input");
    const resultDiv = document.getElementById("result");
    const parrafoDelUsuario = document.querySelector(".user-input");

    function checkPalindrome() {
        let textoDelUsuario = inputField.value;

        if (!textoDelUsuario.trim()) {
            alert("Please input a value");
            return;
        }

        let textoLimpio = textoDelUsuario.replace(/[\W_]/g, '').toLowerCase();
        let textoInvertido = textoLimpio.split('').reverse().join('');

        if (textoLimpio === textoInvertido) {
            parrafoDelUsuario.textContent = `${textoDelUsuario} is a palindrome!`;
        } else {
            parrafoDelUsuario.textContent = `${textoDelUsuario} is not a palindrome.`;
        }

        parrafoDelUsuario.style.marginTop = "0.8rem";
        parrafoDelUsuario.style.color = "#FFFF";
        parrafoDelUsuario.style.fontWeight = "600";

        resultDiv.style.display = "block";
    }

    checkButton.addEventListener("click", checkPalindrome);
});