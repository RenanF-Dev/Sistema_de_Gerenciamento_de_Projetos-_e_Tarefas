/* ======================================
   FILTROS
====================================== */
function filtrarTabela() {

    const projeto = document.getElementById("filtroProjeto").value;
    const status = document.getElementById("filtroStatus").value;

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha => {

        const projetoLinha = linha.cells[2].textContent.trim();

        const selectStatus = linha.querySelector(".status-select");

        const statusLinha = selectStatus ? selectStatus.value : "";

        const projetoOK =
            projeto === "todos" || projeto === projetoLinha;

        const statusOK =
            status === "todos" || status === statusLinha;

        linha.style.display = (projetoOK && statusOK) ? "" : "none";

    });

}