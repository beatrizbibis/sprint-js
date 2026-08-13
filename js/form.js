let listaContatos = [];

class Contato {
    constructor(nome, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.querySelector('input[name="nome"]');
    const inputTelefone = document.querySelector('input[name="telefone"]');

    if (inputNome) {
        inputNome.addEventListener("input", function () {
            this.value = this.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, "");
        });
    }

    if (inputTelefone) {
        inputTelefone.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "");
        });
    }
});

function Post(form) {
    if (typeof event !== 'undefined') {
        event.preventDefault();
    }

    let nome = form.elements.namedItem("nome").value;
    let email = form.elements.namedItem("email").value;
    let telefone = form.elements.namedItem("telefone").value;
    let meioContato = form.elements.namedItem("contato").value;
    let mensagem = form.elements.namedItem("mensagem").value;

    let dadosContato = new Contato(nome, email, telefone, meioContato, mensagem);

    listaContatos.push(dadosContato);

    console.log(`DADOS RECEBIDOS\nNome:     ${dadosContato.nome}\nE-mail:   ${dadosContato.email}\nTelefone: ${dadosContato.telefone}\nTipo:     ${dadosContato.contato}\nMensagem: ${dadosContato.mensagem}`);

    alert(`Obrigado sr(a) ${dadosContato.nome}, os seus dados foram encaminhados com sucesso!`);
    
    form.reset(); 
}