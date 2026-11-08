const formulario = document.getElementById("form-cadastro");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (senha.value !== confirmarSenha.value) {
        mensagem.textContent = "As senhas não são iguais.";
        mensagem.className = "mensagem erro";
        confirmarSenha.focus();
    } else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.className = "mensagem sucesso";
        formulario.reset();
    }
});