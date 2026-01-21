// Tarefa execyutada pelo Web Worker em segundo plano
// Tempo inicial em segundos (25 minutos)
let totalSeconds = 25 * 60;

// Função para decrementar o tempo
function tick() {
    if (totalSeconds > 0) {
        totalSeconds--;
        // Envia o tempo restante para o script principal
        postMessage(totalSeconds);
    } else {
        postMessage('Fim');
        clearInterval(interval);
    }
}

// Inicia o intervalo de 1 segundo e chama a função tick a cada segundo até cair em clearInterval

// worker.js
onmessage = function(event) {
  console.log('Mensagem recebida:', event.data);
  switch(event.data) {
    case 'start':
      setInterval(tick, 1000);
  };
};
