/* ======================================
   TAREFAS
====================================== */

function alterarStatus(select){

    const status = select.value;

    alert("Status atualizado para: " + status);

}

function novaTarefa(){

    alert("Cadastro de nova tarefa.");

}

function editarTarefa(id){

    alert("Editar tarefa " + id);

}

function excluirTarefa(id){

    if(confirmarExclusao("a tarefa")){

        alert("Tarefa " + id + " excluída.");

    }

}