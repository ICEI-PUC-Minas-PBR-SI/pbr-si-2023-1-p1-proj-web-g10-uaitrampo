
// Obtendo os dados armazenados na localStorage
var dadosArmazenados = localStorage.getItem('dados');

// Verificando se existem dados armazenados
if (dadosArmazenados) {
  // Convertendo os dados de volta para um objeto JavaScript (se necessário)
  var dadosObjeto = JSON.parse(dadosArmazenados);

  // Exibindo os dados na página
  var elemento = document.getElementById('cadastroForm');
  elemento.textContent = dadosObjeto.infoPublicacao
  ; // Supondo que o objeto tenha uma propriedade 'nome'
} else {
  // Se não houver dados armazenados, exiba uma mensagem alternativa
  var elemento = document.getElementById('cadastroForm');
  elemento.textContent = 'Nenhum dado armazenado na localStorage.';
}
