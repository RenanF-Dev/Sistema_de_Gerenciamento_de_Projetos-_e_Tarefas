/* ======================================
   SCRIPT GLOBAL
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sistema iniciado.");

    mostrarMensagemBoasVindas();

});

/* ======================================
   BOAS VINDAS
====================================== */

function mostrarMensagemBoasVindas(){

    console.log("Bem-vindo ao ProjectManager!");

}

/* ======================================
   CONFIRMAR EXCLUSÃO
====================================== */

function confirmarExclusao(item){

    return confirm(`Deseja realmente excluir ${item}?`);

}

/* ======================================
   LIMPAR FORMULÁRIO
====================================== */

function limparFormulario(formId){

    document.getElementById(formId).reset();

}

/* ======================================
   VALIDAÇÃO SIMPLES
====================================== */

function validarFormulario(formId){

    const form = document.getElementById(formId);

    if(form.checkValidity()){

        alert("Dados salvos com sucesso!");

        return true;

    }

    alert("Preencha todos os campos obrigatórios.");

    return false;

}