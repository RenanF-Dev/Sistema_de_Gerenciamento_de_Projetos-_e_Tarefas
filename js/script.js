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
  const login = document.getElementById("login").value.trim();

  const senha = document.getElementById("senha").value.trim();

  let perfil = "";

  if (login === "admin" && senha === "admin123") {
    perfil = "administrador";
  } else if (login === "gerente" && senha === "gerente123") {
    perfil = "gerente";
  } else if (login === "usuario" && senha === "usuario123") {
    perfil = "usuario";
  } else {
    alert("Login ou senha inválidos.");

    return;
  }

  localStorage.setItem("perfilUsuario", perfil);

  localStorage.setItem("usuarioLogado", login);

  window.location.href = "dashboard.html";
}

function atualizarPerfil() {
  const perfil = document.getElementById("perfilAtual");

  if (!perfil) return;

  const nome = localStorage.getItem("usuarioLogado");

  const tipo = localStorage.getItem("perfilUsuario");

  perfil.innerHTML = `Bem-vindo, ${nome} (${tipo})`;
}

function logout() {
  localStorage.clear();

  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", atualizarPerfil);
