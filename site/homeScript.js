const tema = document.querySelector("#modo");
tema.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("modoClaro");
    if (ativo === true) {
        tema.textContent = "🌞";
    } else {
        tema.textContent = "🌚";
    }
});

const buscando = document.querySelector(".pesquisa");
const digitou = document.querySelector("#digitado");

buscando.addEventListener("input", (evento) => {
    digitou.textContent = `Você digitou: ${evento.target.value}`
});

buscando.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        digitou.textContent = "Pesquisa realizada com Sucesso!";
    };
});

const lupa = document.querySelector("#lupa");
lupa.addEventListener("click", () => {
    digitou.textContent = "Pesquisa realizada com Sucesso!";
});

const filme = document.querySelector(".filme");
filme.addEventListener("mouseenter", () => {
    filme.classList.add("destacar");
});
filme.addEventListener("mouseleave", () => {
    filme.classList.remove("destacar");
});

const sigma = document.querySelector(".sigma");
sigma.addEventListener("mouseenter", () => {
    sigma.classList.add("destacar");
});
sigma.addEventListener("mouseleave", () => {
    sigma.classList.remove("destacar");
});

const roblox = document.querySelector(".roblox");
roblox.addEventListener("mouseenter", () => {
    roblox.classList.add("destacar");
});
roblox.addEventListener("mouseleave", () => {
    roblox.classList.remove("destacar");
});