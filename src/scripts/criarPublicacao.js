document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const infoPublicacao = document
            .querySelector("#infoPublicacao")
            .value.trim();
        const numero = document.querySelector("#numero").value.trim();
        const email = document.querySelector("#email").value.trim();
        const instagram = document.querySelector("#instagram").value.trim();
        const linkedin = document.querySelector("#linkedin").value.trim();

        if (infoPublicacao === "") {
            alert("Por favor, insira uma descrição sobre o que procura");
            return;
        }

        const data = {
            infoPublicacao: infoPublicacao,
            numero: numero,
            email: email,
            instagram: instagram,
            linkedin: linkedin,
        };

        let cadastroData = localStorage.getItem("publicacoes");

        if (cadastroData) {
            cadastroData = JSON.parse(cadastroData);
        } else {
            cadastroData = [];
        }

        cadastroData.push(data);
        localStorage.setItem("publicacoes", JSON.stringify(cadastroData));

        alert("Publicação criada com sucesso!");

        form.reset(); // Limpa o formulário após o salvamento
    });
});
