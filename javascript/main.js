// function calculaArea(base, altura) { 

//     let bse = prompt("Qual valor da base?")
//     let alt = prompt("Qual valor da altura?")

//     base = bse
//     altura = alt
    
//     resultado = base * altura

//     return alert (`O calculo da sua base x altura da o resultado de área: ${resultado} ` )


//     // a função tem que ser executada
// }

const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 3;
}

const nomeBeneficiario = document.getElementById('nome-beneficiario');

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();
    
    const numeroConta = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const descricao = document.getElementById('descricao')
    const mensagemSucesso = `A quantidade de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b>- conta: <b>${numeroConta.value}</b> e a sua mensagem de <b>${descricao.value}</b> foi entregue  ` 
    const mensagemErro = 'Algo deu errado na transação, verifique o nome.'

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('#success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = ' '; 
        numeroConta.value = ' '; 
        valorDeposito.value = ' '; 
        descricao.value = ' '; 
    }
    else{
        nomeBeneficiario.style.border = '1px solid red';
        const containerMensagemError = document.querySelector('#error-message');
        containerMensagemError.innerHTML = mensagemErro;
        containerMensagemError.style.display = 'block';
    }
})

// nomeBeneficiario.addEventListener('change', function(e)){
//     console.log(e)
// }