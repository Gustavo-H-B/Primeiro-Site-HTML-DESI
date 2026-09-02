const tema = document.querySelector("#modo");
tema.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("modoClaro");
    if (ativo === true) {
        tema.textContent = "🌞";
    } else {
        tema.textContent = "🌚";
    }
});

const favorito1 = document.querySelector("#favorito1");
const filme = document.querySelector(".filme2");
favorito1.addEventListener("click", () => {
    favorito1.classList.toggle("favoritar");
    filme.classList.toggle("favoritar2");
});

const favorito2 = document.querySelector("#favorito2");
const sigma = document.querySelector(".sigma2");
favorito2.addEventListener("click", () => {
    favorito2.classList.toggle("favoritar");
    sigma.classList.toggle("favoritar2");
});

const favorito3 = document.querySelector("#favorito3");
const roblox = document.querySelector(".roblox2");
favorito3.addEventListener("click", () => {
    favorito3.classList.toggle("favoritar");
    roblox.classList.toggle("favoritar2");
});

let vendido1 = Boolean;
let vendido2 = Boolean;
const comprar1 = document.querySelector("#comprar1");
const comprado1 = document.querySelector("#comprado1");
comprar1.addEventListener("click", () => {
    if(vendido1 == true ){
        comprado1.textContent = "Compra já realizada!"
        comprar1.classList.add("recusado");
    } else {
        comprado1.textContent = "Produto comprado com SUCESSO!"
        comprar1.classList.add("aceitoCompra");
        comprar1.textContent ="Comprado";
        vendido1 = true;
    };
});

const comprar2 = document.querySelector("#comprar2");
const comprado2 = document.querySelector("#comprado2");
comprar2.addEventListener("click", () => {
    comprado2.textContent = "Produto comprado com SUCESSO!"
    comprar2.classList.add("aceitoCompra");
    comprar2.textContent ="Comprado";
    if(vendido2 == true ){
        comprado2.textContent = "Compra já realizada!"
        comprar2.classList.add("recusado");
    } else {
        comprado2.textContent = "Produto comprado com SUCESSO!"
        comprar2.classList.add("aceitoCompra");
        comprar2.textContent ="Comprado";
        vendido2 = true;
    };
});