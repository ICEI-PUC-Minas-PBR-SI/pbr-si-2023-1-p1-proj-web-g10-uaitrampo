document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#login");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Obtém os dados do usuário armazenados no localStorage
        const usuarios = JSON.parse(localStorage.getItem("cadastros")) || [];

        // Procura pelo usuário com o email fornecido
        const usuario = usuarios.find((user) => user.email === email);

        // Verifica se o usuário foi encontrado e a senha corresponde
        if (usuario && usuario.senha === senha) {
            // Login bem-sucedido
            usuario.logado = true;

            // Atualiza os dados do usuário no localStorage
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarios));
            alert("Login realizado com sucesso!");
            // Redireciona para a página inicial (index.html)
            window.location.href = "index.html";
        } else {
            // Credenciais inválidas
            alert("Email ou senha incorretos. Por favor, tente novamente.");
        }
    });
});
