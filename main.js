const form = document.getElementById('form-comparacao');

const n1 = document.getElementById('number-1').value;
const n2 = document.getElementById('number-2').value;

const mensagemSucesso = `O 2º Número que é o ${n2} é maior que o 1º Número ${n1} e isso fez a ação ser um sucesso  ` 
const mensagemErro = 'Algo deu errado na transação, verifique se o 2º número é maior que o 1º número.'

form.addEventListener('submit', function(e){
    e.preventDefault();
})

function validarCampo() {
    const campoA = n1
    const campoB = n2

    if (campoB > campoA){
        const containerMensagemSucesso = document.querySelector('#message-success');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    }
    else{
        const containerMensagemError = document.querySelector('#message-error');
        containerMensagemError.innerHTML = mensagemErro;
        containerMensagemError.style.display = 'block';
    }
}
