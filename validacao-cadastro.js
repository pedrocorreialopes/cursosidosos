// Função para validar o formulário de cadastro
function validarCadastro(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value;
    const confirmarSenha = document.getElementById('confirm-password').value;
    const dataNascimento = document.getElementById('birth-date').value;

    // Validar nome (não vazio e pelo menos 3 caracteres)
    if (nome.length < 3) {
        alert('Por favor, insira um nome válido com pelo menos 3 caracteres.');
        return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    // Validar senha (pelo menos 8 caracteres, com letras e números)
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!senhaRegex.test(senha)) {
        alert('A senha deve ter pelo menos 8 caracteres, incluindo letras e números.');
        return;
    }

    // Confirmar se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Validar data de nascimento (idade mínima de 60 anos)
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const m = hoje.getMonth() - dataNasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    if (idade < 60) {
        alert('Este curso é destinado a pessoas com 60 anos ou mais.');
        return;
    }

    // Se todas as validações passaram, simular o envio do e-mail
    const dadosCadastro = `
        Nome: ${nome}
        E-mail: ${email}
        Data de Nascimento: ${dataNascimento}
        Idade: ${idade} anos
    `;

    console.log('Dados do cadastro:', dadosCadastro);
    alert('Cadastro realizado com sucesso! Em um ambiente real, os dados seriam enviados para pedro.correialopesfilho@gmail.com');

    // Aqui você adicionaria o código para enviar os dados para um servidor
    // que cuidaria do envio do e-mail
}

// Adicionar o evento de submit ao formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.register-form form');
    if (form) {
        form.addEventListener('submit', validarCadastro);
    }
});
Last edited just now