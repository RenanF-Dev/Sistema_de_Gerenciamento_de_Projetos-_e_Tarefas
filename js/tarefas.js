/* ======================================
   TAREFAS
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    configurarStatus();

});

/* ======================================
   CONFIGURA STATUS INICIAL
====================================== */

function configurarStatus(){

    const selects = document.querySelectorAll(".status-select");

    selects.forEach(select => {

        atualizarCor(select);

    });

}

/* ======================================
   ALTERA STATUS
====================================== */

function alterarStatus(select){

    atualizarCor(select);

    alert("Status atualizado para: " + select.options[select.selectedIndex].text);

}

/* ======================================
   ALTERA COR DO SELECT
====================================== */

function atualizarCor(select){

    select.classList.remove(
        "todo",
        "progress",
        "done"
    );

    select.classList.add(select.value);

}

/* ======================================
   NOVA TAREFA
====================================== */

function novaTarefa(){

    alert("Tarefa cadastrada com sucesso!");

}

/* ======================================
   EDITAR
====================================== */

function editarTarefa(id){

    alert("Editar tarefa #" + id);

}

/* ======================================
   EXCLUIR
====================================== */

function excluirTarefa(id){

    if(confirmarExclusao("a tarefa")){

        alert("Tarefa excluída com sucesso!");

    }

}