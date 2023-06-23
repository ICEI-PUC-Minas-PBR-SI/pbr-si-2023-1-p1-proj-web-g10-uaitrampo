document.addEventListener("DOMContentLoaded", function () {
    // const button = document.querySelector("#submitBtn");

    console.log("chamou");

    const form = document.querySelector("#cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const cpfInput = document.querySelector("#cpf");
        const emailInput = document.querySelector("#email");
        const senhaInput = document.querySelector("#senha");
        const contratarCheckbox = document.querySelector("#radioContratar");
        const serContratadoCheckbox =
            document.querySelector("#radioContratado");

        const cpf = cpfInput.value.trim();
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();
        const contratar = contratarCheckbox.checked;
        const serContratado = serContratadoCheckbox.checked;

        if (!cpf || !email || !senha) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
        if (!cpfRegex.test(cpf)) {
            alert("Por favor, insira um CPF válido.");
            return;
        }

        const data = {
            cpf: cpf,
            email: email,
            senha: senha,
            contratar: contratar,
            serContratado: serContratado,
        };

        let cadastros = localStorage.getItem("cadastros");
        let cadastroArray = [];

        if (cadastros) {
            cadastroArray = JSON.parse(cadastros);
        }

        // Verifica se o email já existe no banco de dados
        const emailExistente = cadastroArray.find(
            (cadastro) => cadastro.email === email
        );

        // Verifica se o CPF já existe no banco de dados
        const cpfExistente = cadastroArray.find(
            (cadastro) => cadastro.cpf === cpf
        );

        if (emailExistente) {
            alert(
                "Este email já está cadastrado. Por favor, insira outro email."
            );
            return;
        }

        if (cpfExistente) {
            alert("Este CPF já está cadastrado. Por favor, insira outro CPF.");
            return;
        }

        // Adiciona o novo valor ao array
        cadastroArray.push(data);

        // Salva o valor atualizado
        localStorage.setItem("cadastros", JSON.stringify(cadastroArray));

        alert("Cadastro realizado com sucesso!");
        // Redireciona para tela de login
        window.location.href = "telaLogin.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.querySelector("#cpf");

    cpfInput.addEventListener("input", function (event) {
        const input = event.target;
        const cpf = input.value.replace(/\D/g, "");
        const formattedCPF = formatCPF(cpf);
        input.value = formattedCPF;
    });
});

function formatCPF(cpf) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return cpf;
}
