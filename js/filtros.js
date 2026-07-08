/* ======================================
   FILTROS
====================================== */

function filtrarTabela(){

    const projeto = document.getElementById("filtroProjeto").value;

    const status = document.getElementById("filtroStatus").value;

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha=>{

        const nomeProjeto = linha.cells[2].textContent.trim();

        const statusAtual = linha.querySelector(".status-select").value;

        const projetoOK =
            projeto === "todos" ||
            projeto === nomeProjeto;

        const statusOK =
            status === "todos" ||
            status === statusAtual;

        linha.style.display =
            (projetoOK && statusOK)
            ? ""
            : "none";

    });

}