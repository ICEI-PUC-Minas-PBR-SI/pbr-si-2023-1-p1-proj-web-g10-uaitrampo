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

        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

        const data = {
            infoPublicacao: infoPublicacao,
            numero: numero,
            email: email,
            instagram: instagram,
            linkedin: linkedin,
            usuarioLogado: {
                contratar: usuarioLogado.contratar,
                cpf: usuarioLogado.cpf,
                email: usuarioLogado.email,
                logado: usuarioLogado.logado,
                serContratado: usuarioLogado.serContratado,
            },
        };

        let publicacoes = localStorage.getItem("publicacoes");

        if (publicacoes) {
            publicacoes = JSON.parse(publicacoes);
        } else {
            publicacoes = [];
        }

        publicacoes.push(data);
        localStorage.setItem("publicacoes", JSON.stringify(publicacoes));

        alert("Publicação criada com sucesso!");

        form.reset(); // Limpa o formulário após o salvamento
    });
});
