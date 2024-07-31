$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeNovaTarefa = $(`#nome-tarefa`).val();
        const novoItem = $('<li>    </li>');
        $(`<li> ${nomeNovaTarefa} </li>`).appendTo(novoItem);

        $(``).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        console.log(novoItem);
    })

    $('ul').on('click', function(){
        // $(`<li class="click"> </li>`);
        // $(`li`).css('text-decoration').indexOf('line-through')
        // $('li').addClass("click")
    })
}) 