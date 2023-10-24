// Obtém o elemento de input de senha pelo ID
const campoSenha = document.getElementById('password'); 

// Obtém o elemento de classe "weak" (barra de força fraca)
const weak = document.querySelector('.weak');

// Obtém o elemento de classe "medium" (barra de força moderada)
const medium = document.querySelector('.medium'); 

// Obtém o elemento de classe "strong" (barra de força forte)
const strong = document.querySelector('.strong'); 

 // Obtém o elemento de classe "text fraco" (status de senha fraca)
const textFraco = document.querySelector('.text.fraco');

 // Obtém o elemento de classe "text moderado" (status de senha moderada)
const textModerado = document.querySelector('.text.moderado');

// Obtém o elemento de classe "text forte" (status de senha forte)
const textForte = document.querySelector('.text.forte'); 

// Obtém o elemento de classe "indicator" (seção de indicadores de força)
const indicator = document.querySelector('.indicator'); 

function calcularForcaSenha(senha) {
  let pontuacao = 0;

// Incrementa a pontuação se a senha tiver mais de 1 caractere
  if (senha.length > 1) pontuacao += 1; 

  // Incrementa a pontuação se a senha tiver mais de 6 caracteres
  if (senha.length > 6) pontuacao += 2; 

   // Incrementa a pontuação se a senha tiver 10 ou mais caracteres
  if (senha.length >= 10) pontuacao += 3;

  // Incrementa a pontuação se a senha tiver 12 ou mais caracteres
  if (senha.length >= 12) pontuacao += 4; 

  // Incrementa a pontuação se a senha tiver 14 ou mais caracteres
  if (senha.length >= 14) pontuacao += 5; 

   // Incrementa a pontuação se a senha contiver pelo menos um número
  if (/[0-9]/.test(senha)) pontuacao += 1;

 // Incrementa a pontuação se a senha contiver pelo menos uma letra maiúscula
  if (/[A-Z]/.test(senha)) pontuacao += 1;

  // Incrementa a pontuação se a senha contiver pelo menos uma letra minúscula
  if (/[a-z]/.test(senha)) pontuacao += 1; 

   // Incrementa a pontuação se a senha contiver caracteres especiais
  if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) pontuacao += 2;

  // Retorna a pontuação total calculada com base nos critérios da senha
  return pontuacao; 
}

function verificarForcaSenha() {
     // Obtém o valor do campo de senha
  const senha = campoSenha.value;
// Calcula a pontuação da senha com a função calcularForcaSenha
  const pontuacao = calcularForcaSenha(senha); 

  // Define a largura da barra de força 0%
  weak.style.width = '0%'; 
  medium.style.width = '0%'; 
  strong.style.width = '0%';

  // Oculta o status de senha fraca
  textFraco.style.display = 'none'; 
  textModerado.style.display = 'none'; 
  textForte.style.display = 'none'; 

  if (pontuacao >= 9) {
    strong.style.width = '100%'; // Define a largura da barra de força forte como 100%
    textForte.style.display = 'block'; // Exibe o status de senha forte
  } else if (pontuacao > 5 && pontuacao < 9) {
    medium.style.width = '100%'; // Define a largura da barra de força moderada como 100%
    textModerado.style.display = 'block'; // Exibe o status de senha moderada
  } else {
    weak.style.width = '100%'; // Define a largura da barra de força fraca como 100%
    textFraco.style.display = 'block'; // Exibe o status de senha fraca
  }

  if (senha.length === 0) {
    // Oculta a seção de indicadores de força se a senha estiver vazia
    indicator.style.display = 'none'; 
  } else {
    // Exibe a seção de indicadores de força
    indicator.style.display = 'flex'; 
  }
}
