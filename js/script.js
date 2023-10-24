const campoSenha = document.getElementById('password');
const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const textFraco = document.querySelector('.text.fraco');
const textModerado = document.querySelector('.text.moderado');
const textForte = document.querySelector('.text.forte');
const indicator = document.querySelector('.indicator');

function calcularForcaSenha(senha) {
  let pontuacao = 0;

  if (senha.length > 1) pontuacao += 1;
  if (senha.length > 6) pontuacao += 2;
  if (senha.length >= 10) pontuacao += 3;
  if (senha.length >= 12) pontuacao += 4;
  if (senha.length >= 14) pontuacao += 5;

  if (/[0-9]/.test(senha)) pontuacao += 1;
  if (/[A-Z]/.test(senha)) pontuacao += 1;
  if (/[a-z]/.test(senha)) pontuacao += 1;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) pontuacao += 2;

  return pontuacao;
}

function verificarForcaSenha() {
  const senha = campoSenha.value;
  const pontuacao = calcularForcaSenha(senha);

  weak.style.width = '0%';
  medium.style.width = '0%';
  strong.style.width = '0%';

  textFraco.style.display = 'none';
  textModerado.style.display = 'none';
  textForte.style.display = 'none';

  if (pontuacao >= 9) {
    strong.style.width = '100%';
    textForte.style.display = 'block';
  } else if (pontuacao > 5 && pontuacao < 9) {
    medium.style.width = '100%';
    textModerado.style.display = 'block';
  } else {
    weak.style.width = '100%';
    textFraco.style.display = 'block';
  }

  if (senha.length === 0) {
    indicator.style.display = 'none';
  } else {
    indicator.style.display = 'flex';
    indicator.style.display = 'block';
  }
}