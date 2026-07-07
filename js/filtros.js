/* ======================================
   FILTROS
====================================== */

function filtrarTabela(){

    const projeto = document.getElementById("filtroProjeto").value.toLowerCase();

    const status = document.getElementById("filtroStatus").value.toLowerCase();

    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha=>{

        const texto = linha.innerText.toLowerCase();

        const projetoOk = projeto === "todos" || texto.includes(projeto);

        const statusOk = status === "todos" || texto.includes(status);

        linha.style.display = (projetoOk && statusOk) ? "" : "none";

    });

}