document.getElementById('btnYes').addEventListener('click', function() {
  const balloon = document.getElementById('balloon');
  const buttonNo = document.getElementById('btnNo');
  const buttonYes = this;

  // Remove a classe "hidden" para mostrar o balão
  balloon.classList.remove('hidden');

  // Adiciona a animação de subida e iluminação
  setTimeout(() => {
    balloon.classList.add('illuminating');
  }, 10);

  

  // Faz o botão "Sim" desaparecer com um efeito de transição
  buttonYes.style.transition = 'opacity 1s ease'; // Transição suave
  buttonYes.style.opacity = 0; // Desaparece visualmente
  
  // Remove o botão completamente após a transição
  setTimeout(() => {
    buttonYes.style.display = 'none';
  }, 1000); // 1 segundo de espera para sumir completamente

  // Remove o botão "Não" após o balão subir
  setTimeout(() => {
    buttonNo.style.transition = 'opacity 1s ease'; // Transição suave
    buttonNo.style.opacity = 0; // Desaparece visualmente
    setTimeout(() => {
      buttonNo.style.display = 'none'; // Remove completamente após a transição
    }, 500); // 500 milissegundos de espera para sumir completamente
  }, 500); // Remove o botão "Não" após 5 segundos
});

// Função para mover o botão "Não" para uma posição aleatória
function moveButtonNo() {
  const buttonNo = document.getElementById('btnNo');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Gera posições aleatórias, limitando-as dentro do viewport
  const buttonWidth = buttonNo.offsetWidth;
  const buttonHeight = buttonNo.offsetHeight;

  // Calcular nova posição aleatória, garantindo que o botão permaneça visível
  const randomX = Math.random() * (viewportWidth - buttonWidth);
  const randomY = Math.random() * (viewportHeight - buttonHeight);

  // Aplica a nova posição ao botão "Não"
  buttonNo.style.left = `${randomX}px`;
  buttonNo.style.top = `${randomY}px`;
}

// Adiciona o evento de mouseover para o botão "Não"
// document.getElementById('btnNo').addEventListener('mouseover', moveButtonNo);
