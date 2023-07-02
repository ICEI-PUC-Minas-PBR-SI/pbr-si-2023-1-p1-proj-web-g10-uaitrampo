document.addEventListener("DOMContentLoaded", function () {
    console.log("chamou");
  
    const form = document.querySelector("#editarPerfil");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtém os valores dos campos do formulário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const sobreVoce = document.getElementById("sobreVoce").value;
  
      // Obtém os dados do usuário armazenados no localStorage
      const usuarios = JSON.parse(localStorage.getItem("cadastros")) || [];
  
      const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
      // Procura pelo usuário com o email fornecido
      const usuario = usuarios.find((user) => user.email === usuarioLogado.email);
  
      // Verifica se o usuário foi encontrado
      if (usuario) {
        // Atualiza os campos de nome, email e adiciona o campo "sobreVoce"
        usuario.nome = nome;
        usuario.email = email;
        usuario.sobreVoce = sobreVoce;
        usuario.imagemPerfil = localStorage.getItem("imagemPerfil"); // Armazena o campo "imagemPerfil"
  
        // Atualiza os dados do usuário no localStorage
        localStorage.setItem("cadastros", JSON.stringify(usuarios));
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  
        alert("Cadastro atualizado com sucesso:");
      } else {
        alert("Usuário não encontrado");
      }
    });
  
    function preencherCampos(usuario) {
      const nomeInput = document.getElementById("nome");
      const emailInput = document.getElementById("email");
      const sobreVoceInput = document.getElementById("sobreVoce");
  
      nomeInput.value = usuario.nome;
      emailInput.value = usuario.email;
      sobreVoceInput.value = usuario.sobreVoce;
  
      const pictureImage = document.querySelector(".picture__image");
  
      if (usuario.imagemPerfil) {
        const img = document.createElement("img");
        img.src = usuario.imagemPerfil;
        img.classList.add("picture__img");
        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
      }
    }
  
    const inputFile = document.querySelector("#picture__input");
    const pictureImage = document.querySelector(".picture__image");
    const pictureImageTxt = "Foto de Perfil";
    pictureImage.innerHTML = pictureImageTxt;
  
    inputFile.addEventListener("change", function (e) {
      const inputTarget = e.target;
      const file = inputTarget.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.addEventListener("load", function (e) {
          const readerTarget = e.target;
  
          const img = document.createElement("img");
          img.src = readerTarget.result;
          img.classList.add("picture__img");
  
          pictureImage.innerHTML = "";
          pictureImage.appendChild(img);
  
          // Armazena a imagem de perfil como um dado base64 no localStorage
          localStorage.setItem("imagemPerfil", readerTarget.result);
        });
  
        reader.readAsDataURL(file);
      } else {
        pictureImage.innerHTML = pictureImageTxt;
      }
    });
  
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  
    preencherCampos(usuarioLogado);
  });
  