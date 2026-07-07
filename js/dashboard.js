/* ======================================
   DASHBOARD
====================================== */

const indicadores = {

    projetos:12,
    tarefas:43,
    concluidas:20,
    andamento:15

};

function atualizarDashboard(){

    document.getElementById("totalProjetos").innerText = indicadores.projetos;

    document.getElementById("totalTarefas").innerText = indicadores.tarefas;

    document.getElementById("totalConcluidas").innerText = indicadores.concluidas;

    document.getElementById("totalAndamento").innerText = indicadores.andamento;

}

document.addEventListener("DOMContentLoaded", atualizarDashboard);