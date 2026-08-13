// Class Contato
class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {
    if (typeof event !== 'undefined') {
        event.preventDefault();
    }

    let nome = form.elements.namedItem("nome").value;
    let sobrenome = form.elements.namedItem("sobrenome").value;
    let email = form.elements.namedItem("email").value;
    let cpf = form.elements.namedItem("cpf").value;
    let telefone = form.elements.namedItem("telefone").value;
    let meioContato = form.elements.namedItem("contato").value;

    let dadosContato = new Contato(nome, sobrenome, email, cpf, telefone, meioContato);

    alert(`Obrigado sr(a) ${dadosContato.nome} ${dadosContato.sobrenome}, os seus dados foram encaminhados com sucesso!`);
    
    form.reset(); 
}