window.addEventListener('scroll', function () {
  document.querySelector('.arrow-down').classList.remove('animation-fade');
  document.querySelector('.arrow-down').classList.add('hidden');
}
);

const copiar = (botao) => {
  const email = "uiuxbruno.design@gmail.com";
  const number = "19988705203";

  if (botao.id == "copyEmail") {

    navigator.clipboard.writeText(email);

    botao.innerHTML = "Texto copiado!";

    setTimeout(() => {
      botao.innerHTML = "Copiar para área de transfêrencia";
    }, 1500);

  }
  else if (botao.id == "copyNumber") {

    navigator.clipboard.writeText(number);

    botao.innerHTML = "Texto copiado!"

    setTimeout(() => {
      botao.innerHTML = "Copiar para área de transfêrencia";
    }, 1500);

  }
}