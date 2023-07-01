document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("formFileMultiple");
    const divPortfolio = document.querySelector(".LinksPDF");
    const adicionarBtn = document.querySelector(".botaoAdicionar button");
    const excluirBtn = document.querySelector(
        ".botoesTelaExcluirPortfolio .btn-outline-danger"
    );

    const storedLinks = localStorage.getItem("portfolioLinks");
    if (storedLinks) {
        divPortfolio.innerHTML = storedLinks;
    }

    adicionarBtn.addEventListener("click", function () {
        const files = fileInput.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            const fileLink = document.createElement("a");
            fileLink.textContent = file.name;
            fileLink.href = URL.createObjectURL(file);
            fileLink.target = "_blank";

            divPortfolio.appendChild(fileLink);
        }

        localStorage.setItem("portfolioLinks", divPortfolio.innerHTML);

        fileInput.value = "";
    });

    function limparPortfolio() {
        divPortfolio.innerHTML = "";
        localStorage.removeItem("portfolioLinks");
    }

    excluirBtn.addEventListener("click", limparPortfolio);
});

document.addEventListener("DOMContentLoaded", function () {
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
    // const form = document.querySelector("#login"); //TODO
    // form.addEventListener("submit", function (event) {
    //     event.preventDefault();

    // const email = document.getElementById("email").value;
    // const senha = document.getElementById("senha").value;

    // Obtém os dados do usuário armazenados no localStorage
    const usuarioLogado =
        JSON.parse(localStorage.getItem("usuarioLogado")) || [];

    // Procura pelo usuário com o email fornecido
    //const nome = usuarios.find((user) => user.nome === nome);
    const email = usuarioLogado.email;
    //const sobrevoce = usuarios.find((user) => user.sobrevoce === sobrevoce);

    if (email) {
        //document.getElementById("nameUser").innerText = nome;
        document.getElementById("emailUser").innerText = email;
        //document.getElementById("sobreUser").innerText = sobrevoce;
    } else {
        console.log("falha ao recuperar informações");
    }

    //});
});
