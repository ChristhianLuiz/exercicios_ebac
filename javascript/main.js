const form = document.getElementById('form-comparacao');
const n1 = document.getElementById('number1');
const n2 = document.getElementById('number2');

form.addEventListener('submit', function(e){
    e.preventDefault();   

    const mensagemSucesso = `O número ${n2.value} é maior que o número ${n1.value} e isso fez a ação ser um sucesso` 
    const mensagemErro = 'Algo deu errado na comparação, verifique se o 2º número é maior que o 1º número.'
    const mensagemNeutra = `Os 2 números tem o mesmo valor`
    const mensagemFalha = `Houve alguma falha na interação. não conseguimos operar!`

    const campoA = n1.value
    const campoB = n2.value

    if (campoA < campoB){
        const containerMensagemSucesso = document.querySelector('#message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    }
    else if(campoA > campoB){
        const containerMensagemErro = document.querySelector('#message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
    else if(campoA == campoB){
        const containerMensagemNeutra = document.querySelector('#message');
        containerMensagemNeutra.innerHTML = mensagemNeutra;
        containerMensagemNeutra.style.display = 'block';
    }
    else{
        const containerMensagemFalha = document.querySelector('#message');
        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemFalha.style.display = 'block';
    }
})  

// function validarCampo() {


