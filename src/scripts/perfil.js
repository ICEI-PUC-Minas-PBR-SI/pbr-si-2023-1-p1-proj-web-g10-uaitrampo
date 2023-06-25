document.addEventListener("DOMContentLoaded", function () {
    // const form = document.querySelector("#login"); //TODO
    // form.addEventListener("submit", function (event) {
    //     event.preventDefault();

        // const email = document.getElementById("email").value;
        // const senha = document.getElementById("senha").value;

        // Obtém os dados do usuário armazenados no localStorage   
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || [];    
    
        // Procura pelo usuário com o email fornecido
        //const nome = usuarios.find((user) => user.nome === nome);   
        const email = usuarioLogado.email;
        //const sobrevoce = usuarios.find((user) => user.sobrevoce === sobrevoce);
    
        if(email){
            //document.getElementById("nameUser").innerText = nome;
            document.getElementById("emailUser").innerText = email;
            //document.getElementById("sobreUser").innerText = sobrevoce;
        }
        else{
            console.log("falha ao recuperar informações")
        }
      
    //});
});

