const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
const serContratado = usuarioLogado.serContratado;

// Obtendo os dados armazenados na localStorage
var dadosArmazenados = localStorage.getItem('publicacoes');

// Verificando se existem dados armazenados
if (dadosArmazenados) {
  // Convertendo os dados de volta para um objeto JavaScript (se necessário)
  var dadosObjeto = JSON.parse(dadosArmazenados);

  if (serContratado) {
    var mPublicacoes = document.querySelector(".mPublicacoes");
    
    const nomeUsuario = usuarioLogado.nome;
  
    document.addEventListener("DOMContentLoaded", function () {
      const pictureImage = document.querySelector(".picture_image");
  
      // Verifica se a imagem está armazenada no Local Storage
      const storedImage = localStorage.getItem("profileImage");
  
      if (storedImage) {
        const img = document.createElement("img");
        img.src = storedImage;
        img.classList.add("picture_img");
  
        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
      }
    });
  
    dadosObjeto.map(info => {
      // Container
      const div = document.createElement("div");
  
      // Nome do usuário que fez a publicação
      const nomeUsuarioElement = document.createElement("h2");
      nomeUsuarioElement.innerText = nomeUsuario;
      div.appendChild(nomeUsuarioElement);
  
      // Título da publicação
      const titulo = document.createElement("div");
      titulo.innerText = info.infoPublicacao;
      titulo.classList.add("titulo");
      div.appendChild(titulo);
  
      // Instagram
      const containerInstagram = document.createElement("div");
      containerInstagram.classList.add("containerSocial");
  
      const span = document.createElement("span");
      span.innerText = info.instagram;
  
      if (info.instagram !== undefined) {
        span.innerText = "Instagram: " + info.instagram;
      }
      containerInstagram.appendChild(span);
      div.appendChild(containerInstagram);
  
      // Email
      const containerEmail = document.createElement("div");
      containerEmail.classList.add("containerSocial");
  
      const spanEmail = document.createElement("span");
      spanEmail.innerText = info.email;
  
      if (info.email !== undefined) {
        spanEmail.innerText = "Email: " + info.email;
      }
      containerEmail.appendChild(spanEmail);
      div.appendChild(containerEmail);
  
      // Linkedin
      const containerLinkedin = document.createElement("div");
      containerLinkedin.classList.add("containerSocial");
  
      const spanLinkedin = document.createElement("span");
      spanLinkedin.innerText = info.linkedin;
  
      if (info.linkedin !== undefined) {
        spanLinkedin.innerText = "Linkedin: " + info.linkedin;
      }
      containerLinkedin.appendChild(spanLinkedin);
      div.appendChild(containerLinkedin);
  
      // Telefone
      const containerTelefone = document.createElement("div");
      containerTelefone.classList.add("containerSocial");
  
      const spanTelefone = document.createElement("span");
  
      if (info.numero !== undefined) {
        spanTelefone.innerText = "Telefone: " + info.numero;
      }
  
      containerTelefone.appendChild(spanTelefone);
      div.appendChild(containerTelefone);
  
      mPublicacoes.appendChild(div);
  
      console.log("Contatos: \n" + info);
    });
  
    // Exibindo os dados na página
    var elemento = document.getElementById('cadastroForm');
    elemento.textContent = dadosObjeto.infoPublicacao;
  } else {
    ocultarDivInformacoes();
  }
} else {
  ocultarDivInformacoes();
}

function ocultarDivInformacoes() {
  var mPublicacoes = document.querySelector('.mPublicacoes');
  mPublicacoes.style.display = 'none';
}