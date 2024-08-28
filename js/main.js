$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeNovaTarefa = $(`#nome-tarefa`).val();
        const novoItem = $('<li></li>');

        $(`<li class="tarefa"> ${nomeNovaTarefa} </li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        // $(``).appendTo(novoItem);
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass("complete")
    })
}) 