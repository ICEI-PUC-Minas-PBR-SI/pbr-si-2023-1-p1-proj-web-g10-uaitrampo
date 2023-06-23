document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("formFileMultiple");
    const divPortfolio = document.querySelector(".LinksPDF");
    const adicionarBtn = document.querySelector(".botaoAdicionar button");
    const excluirBtn = document.querySelector(".botoesTelaExcluirPortfolio .btn-outline-danger");

    adicionarBtn.addEventListener("click", function() {
      const files = fileInput.files;
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
  
        const fileLink = document.createElement("a");
        fileLink.textContent = file.name;
        fileLink.href = URL.createObjectURL(file);
        fileLink.target = "_blank";
  
        divPortfolio.appendChild(fileLink);
      }
      
      fileInput.value = "";
    });

    function limparPortfolio() {
      while (divPortfolio.firstChild) {
        divPortfolio.removeChild(divPortfolio.firstChild);
      }
    }

    // Adiciona um evento de clique ao botão "Excluir"
    excluirBtn.addEventListener("click", limparPortfolio);
});