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

function mostrarMensagemBoasVindas() {
  console.log("Bem-vindo ao ProjectManager!");
}

/* ======================================
   CONFIRMAR EXCLUSÃO
====================================== */

function confirmarExclusao(item) {
  return confirm(`Deseja realmente excluir ${item}?`);
}

/* ======================================
   LIMPAR FORMULÁRIO
====================================== */

function limparFormulario(formId) {
  document.getElementById(formId).reset();
}

/* ======================================
   VALIDAÇÃO SIMPLES
====================================== */

function validarFormulario(formId) {
  const form = document.getElementById(formId);

  if (form.checkValidity()) {
    alert("Dados salvos com sucesso!");

    return true;
  }

  alert("Preencha todos os campos obrigatórios.");

  return false;
}

/* ======================================
   LOGIN
====================================== */

function fazerLogin() {
  const perfil = document.getElementById("perfilLogin").value;

  localStorage.setItem("perfilUsuario", perfil);

  window.location.href = "dashboard.html";
}

document.addEventListener("DOMContentLoaded", aplicarPermissoes);

function aplicarPermissoes() {
  const perfilUsuario = localStorage.getItem("perfilUsuario") || "usuario";
  const menuUsuarios = document.getElementById("menuUsuarios");
  const menuProjetos = document.getElementById("menuProjetos");

  switch (perfilUsuario) {
    case "administrador":
      break;

    case "gerente":
      if (menuUsuarios) {
        menuUsuarios.style.display = "none";
      }

      break;

    case "usuario":
      if (menuUsuarios) {
        menuUsuarios.style.display = "none";
      }

      if (menuProjetos) {
        menuProjetos.style.display = "none";
      }

      break;
  }
}

function atualizarPerfil(){

    const perfil=document.getElementById("perfilAtual");

    if(!perfil) return;

    const perfilUsuario = localStorage.getItem("perfilUsuario") || "usuario";

    switch(perfilUsuario){

        case "administrador":
            perfil.innerHTML="Bem-vindo, Administrador";
            break;

        case "gerente":
            perfil.innerHTML="Bem-vindo, Gerente de Projeto";
            break;

        default:
            perfil.innerHTML="Bem-vindo, Usuário";
            break;

    }

}

document.addEventListener("DOMContentLoaded", atualizarPerfil);
