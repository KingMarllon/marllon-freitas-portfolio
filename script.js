// Fiz uma validação de formulário adicionando um listener ao evento de envio do formulário!
document.querySelector("form").addEventListener("submit", function(event) {
    const nome = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const mensagem = document.querySelector("textarea").value;

    // Expressão regular para validar o formato do e-mail!
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se os todos os campos estão preenchidos!
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!"); // Mensagem de alerta!
        event.preventDefault(); // Impede o envio do formulário!

    // Verifica se o formato do e-mail é válido
    } else if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido!"); // Mensagem de alerta!
        event.preventDefault(); // Impede o envio do formulário!

    // Se todos os campos forem preenchidos e o e-mail for válido
    } else {
        //Exibe uma mensagem de agradecimento!
        alert("Obrigado pela sua mensagem, " + nome + "!"); // Mensagem de agradecimento!
        this.reset(); // Limpa os campos do formulário!
    }
});

