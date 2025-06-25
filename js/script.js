const url = document.querySelector('#url');
const apelido = document.querySelector('#apelido');
const botao = document.querySelector('#botao');
const codeqr = document.querySelector('#codeqr');

const usuario = localStorage.getItem("usuarioLogado");
if (!usuario) {
  alert("Usuário não logado! Você será redirecionado para a tela de login.");
  window.location.href = "login.html";
}

const chaveHistorico = `historicoQR_${usuario}`;
let historico = JSON.parse(localStorage.getItem(chaveHistorico)) || [];

botao.addEventListener('click', gerador);
url.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    gerador();
  }
});

function gerador() {
  if (!url.value || !apelido.value) {
    alert("Preencha tanto o link quanto o apelido.");
    return;
  }

  codeqr.innerHTML = '';
  const qrcodeContainer = document.createElement('div');
  codeqr.appendChild(qrcodeContainer);

  const qr = new QRCode(qrcodeContainer, {
    text: url.value,
    width: 300,
    height: 300
  });

  setTimeout(() => {
    const img = qrcodeContainer.querySelector('img');
    const qrImageData = img ? img.src : "";

    historico.push({
      apelido: apelido.value,
      link: url.value,
      imagem: qrImageData
    });

    localStorage.setItem(chaveHistorico, JSON.stringify(historico));

    apelido.value = '';
    url.value = '';
  }, 500);
}
