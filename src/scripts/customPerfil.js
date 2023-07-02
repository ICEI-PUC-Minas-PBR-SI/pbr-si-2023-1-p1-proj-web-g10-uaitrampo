document.addEventListener("DOMContentLoaded", function () {
    console.log("chamou");
    const form = document.querySelector("#editarPerfil");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const sobreVoce = document.getElementById("sobreVoce").value;
        const storedImage = localStorage.getItem("profileImage").value;
        // Obtém os dados do usuário armazenados no localStorage
        const usuarios = JSON.parse(localStorage.getItem("cadastros")) || [];

        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

        // Procura pelo usuário com o email fornecido
        const usuario = usuarios.find(
            (user) => user.email === usuarioLogado.email
        );

        // Verifica se o usuário foi encontrado
        if (usuario) {
            // Atualiza os campos de nome, email e adiciona o campo "sobreVoce"
            usuario.nome = nome;
            usuario.email = email;
            usuario.sobreVoce = sobreVoce;
            usuario.profileImage = profileImage;

            // Atualiza os dados do usuário no localStorage
            localStorage.setItem("cadastros", JSON.stringify(usuarios));
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarios[0]));

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
    }

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    preencherCampos(usuarioLogado);
});

document.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.getElementById("picture_input");
    const pictureImage = document.querySelector(".picture_image");
    const saveButton = document.getElementById("save_button");

    // Verifica se há uma imagem salva no Local Storage
    const storedImage = localStorage.getItem("profileImage");

    if (storedImage) {
      const img = document.createElement("img");
      img.src = storedImage;
      img.classList.add("picture_img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    }

    inputFile.addEventListener("change", function (e) {
      const inputTarget = e.target;
      const file = inputTarget.files[0];

      if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
          const readerTarget = e.target;

          const img = document.createElement("img");
          img.src = readerTarget.result;
          img.classList.add("picture_img");

          pictureImage.innerHTML = "";
          pictureImage.appendChild(img);

          // Salva a imagem no Local Storage
          localStorage.setItem("profileImage", readerTarget.result);
        });

        reader.readAsDataURL(file);
      }
    });

    saveButton.addEventListener("click", function () {
      // Recupera a imagem salva no Local Storage
      const storedImage = localStorage.getItem("profileImage");

      if (storedImage) {
        alert("Imagem: " + storedImage);
      } else {
        alert("Nenhuma imagem salva.");
      }
    });
  });