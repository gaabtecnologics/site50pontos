// Pegando os elementos do HTML
const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

// Faz uma ação quando o botão for clicado
botao.addEventListener("click", function() {
    // Verifica se a mensagem contém a classe 'oculto'
    if (mensagem.classList.contains("oculto")) {
        mensagem.classList.remove("oculto");
        botao.textContent = "Esconder informações";
    } else {
        mensagem.classList.add("oculto");
        botao.textContent = "Ver mais informações";
    }
});