const tema = document.querySelector("#modo");
tema.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("modoClaro");
    if (ativo === true) {
        tema.textContent = "🌞";
    } else {
        tema.textContent = "🌚";
    }
});

const form = document.querySelector(".formulario");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    resultado.textContent = "Currículo recebido!";
    resultado.classList.add("aceito");
});