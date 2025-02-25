onload = () =>{
        document.body.classList.remove("container");
};

const texto = "Para mi culona fav";
const elementoTexto = document.getElementById("texto");
let index = 0;

function escribirTexto() {
    if (index < texto.length) {
        elementoTexto.textContent += texto.charAt(index);
        index++;
        setTimeout(escribirTexto, 130); // Ajusta el tiempo para que se escriba más rápido o más lento
    }
}

escribirTexto();