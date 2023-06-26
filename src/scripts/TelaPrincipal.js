var informacoes = document.querySelector(".informacoes");

// Obtendo os dados armazenados na localStorage
var dadosArmazenados = localStorage.getItem("publicacoes");

// Verificando se existem dados armazenados
if (dadosArmazenados) {
    // Convertendo os dados de volta para um objeto JavaScript (se necessário)
    var dadosObjeto = JSON.parse(dadosArmazenados);

    dadosObjeto.map((info) => {
        //Container
        const div = document.createElement("div");

        //Instagram
        const titulo = document.createElement("h2");
        titulo.innerText = info.infoPublicacao;
        titulo.classList.add("titulo");
        div.appendChild(titulo);

        const containerInstagram = document.createElement("div");
        containerInstagram.classList.add("containerSocial");
        const imgInstargam = document.createElement("img");
        imgInstargam.src = "../assets/img/Instagram-Logo.wine.svg";
        const span = document.createElement("span");
        span.innerText = info.instagram;

        containerInstagram.appendChild(imgInstargam);
        containerInstagram.appendChild(span);
        div.appendChild(containerInstagram);
        //------------------------------------------

        //Linkedin
        const containerLinkedin = document.createElement("div");
        containerLinkedin.classList.add("containerSocial");
        const imgLinkedin = document.createElement("img");
        imgLinkedin.src = "../assets/img/LinkedIn-Logo.wine.svg";
        const spanLinkedin = document.createElement("span");
        spanLinkedin.innerText = info.linkedin;

        containerLinkedin.appendChild(imgLinkedin);
        containerLinkedin.appendChild(spanLinkedin);
        div.appendChild(containerLinkedin);
        //------------------------------------------

        //Whatsapp
        const containerWhatsapp = document.createElement("div");
        containerWhatsapp.classList.add("containerSocial");
        const imgWhatsapp = document.createElement("img");
        imgWhatsapp.src = "../assets/img/WhatsApp-Logo.wine.svg";
        const spanWhatsapp = document.createElement("span");

        if (info.numero !== undefined) {
            spanWhatsapp.innerText = info.numero;
        }

        containerWhatsapp.appendChild(imgWhatsapp);
        containerWhatsapp.appendChild(spanWhatsapp);
        div.appendChild(containerWhatsapp);
        //------------------------------------------

        //-----------------------------------------------
        informacoes.appendChild(div);

        console.log(info);
    });

    // Exibindo os dados na página
    var elemento = document.getElementById("cadastroForm");
    elemento.textContent = dadosObjeto.infoPublicacao; // Supondo que o objeto tenha uma propriedade 'nome'
} else {
    // Se não houver dados armazenados, exiba uma mensagem alternativa
    var elemento = document.getElementById("cadastroForm");
    elemento.textContent = "Nenhum dado armazenado na localStorage.";
}
