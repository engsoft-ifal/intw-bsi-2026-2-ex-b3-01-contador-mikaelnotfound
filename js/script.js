// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// 1. SELECIONAR: os elementos que vamos usar
const total = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");

// 2. ESTADO: o valor atual do contador
let contador = 0;

// 3. ALTERAR: mostra o valor do contador na tela
function mostrarTotal() {
  total.textContent = contador;
}

// 4. OUVIR: somar +1
botaoSomar.addEventListener("click", () => {
  contador = contador + 1;
  mostrarTotal();
});

// 4. OUVIR: zerar o contador
botaoZerar.addEventListener("click", () => {
  contador = 0;
  mostrarTotal();
});

// Ao carregar a página, o total começa em 0
mostrarTotal();
