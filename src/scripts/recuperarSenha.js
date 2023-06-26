document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("placeholder-txt1");
    const codigoInput = document.getElementById("placeholder-txt2");
    const enviarCodigoBtn = document.querySelector(".botao");
    const verificarBtn = document.querySelector(".enviarCodigo");
    let codigoGerado;
  
    enviarCodigoBtn.addEventListener("click", function() {
      const email = emailInput.value;
      codigoGerado = gerarCodigoRecuperacao();
      localStorage.setItem("codigoRecuperacao", codigoGerado);
      enviarCodigoPorEmail(email, codigoGerado);
    });
  
    function verificarCodigo() {
      const codigoDigitado = codigoInput.value;
      const codigoArmazenado = localStorage.getItem("codigoRecuperacao");
      console.log(`Código gerado: ${codigoArmazenado}, código digitado: ${codigoDigitado}`);
  
      if (verificarCodigoRecuperacao(codigoArmazenado, codigoDigitado)) {
        alert("Código válido! Acesso autorizado.");
        abrirModalTudoCerto(); 
      } else {
        alert("Código inválido! Acesso negado.");
      }
    }
  
    verificarBtn.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do evento de clique
      verificarCodigo();
    });
  
    function gerarCodigoRecuperacao() {
      return Math.floor(100000 + Math.random() * 900000);
    }
  
    function enviarCodigoPorEmail(email, codigoGerado) {
      console.log(`Código de recuperação enviado para ${email}: ${codigoGerado}`);
    }
  
    function verificarCodigoRecuperacao(codigoGerado, codigoDigitado) {
      if (codigoGerado === codigoDigitado) {
        return true;
      } else {
        return false;
      }
    }
  
    function abrirModalTudoCerto() {
      const modal = document.getElementById("modalDaTelaTudoCerto");
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    }
  });