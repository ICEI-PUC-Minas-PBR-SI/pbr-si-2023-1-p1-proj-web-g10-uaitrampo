document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento de input de arquivos
    const fileInput = document.getElementById("formFileMultiple");
  
    // Obtém a div "divPortfolio"
    const divPortfolio = document.querySelector(".LinksPDF");
  
    // Adiciona um evento de clique ao botão "Adicionar"
    const adicionarBtn = document.querySelector(".botaoAdicionar button");
    adicionarBtn.addEventListener("click", function() {
      // Obtém a lista de arquivos selecionados
      const files = fileInput.files;
  
      // Itera sobre cada arquivo selecionado
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
  
        // Cria um elemento de âncora para exibir o nome do arquivo clicável
        const fileLink = document.createElement("a");
        fileLink.textContent = file.name;
        fileLink.href = URL.createObjectURL(file);
        fileLink.target = "_blank";
  
        // Adiciona o elemento de âncora à div "divPortfolio"
        divPortfolio.appendChild(fileLink);
      }
  
      // Limpa o valor do input de arquivos
      fileInput.value = "";
    });
  });