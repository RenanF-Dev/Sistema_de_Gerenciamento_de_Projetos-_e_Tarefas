/* ======================================
   SCRIPT GLOBAL
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sistema iniciado.");

    mostrarMensagemBoasVindas();

    atualizarPerfil();

    controlarPermissoesUsuarios();

    controlarPerfilCadastro();

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

/* ======================================
   PERFIL
====================================== */

function atualizarPerfil() {

    const perfilAtual = document.getElementById("perfilAtual");

    if (!perfilAtual) return;

    const nome = localStorage.getItem("usuarioLogado");
    const tipo = localStorage.getItem("perfilUsuario");

    perfilAtual.innerHTML = `Bem-vindo, ${nome} (${tipo})`;

}

/* ======================================
   LOGOUT
====================================== */

function logout() {

    localStorage.clear();

    window.location.href = "index.html";

}

/* ======================================
   CONTROLE DE PERMISSÕES - USUÁRIOS
====================================== */

function controlarPermissoesUsuarios() {

    const btnNovoUsuario = document.getElementById("btnNovoUsuario");

    // Não está na página de usuários
    if (!btnNovoUsuario) return;

    const perfil = localStorage.getItem("perfilUsuario");

    const btnsEditar = document.querySelectorAll(".editar-usuario");
    const btnsExcluir = document.querySelectorAll(".excluir-usuario");
    const linhas = document.querySelectorAll("tbody tr");

    // ===========================
    // ADMINISTRADOR
    // ===========================

    if (perfil === "administrador") {

        return;

    }

    // ===========================
    // GERENTE
    // ===========================

    if (perfil === "gerente") {

        // Não pode excluir usuários
        btnsExcluir.forEach(botao => {

            botao.style.display = "none";

        });

        // Não vê administradores nem gerentes
        linhas.forEach(linha => {

            const perfilLinha = linha.dataset.perfil;

            if (perfilLinha === "Administrador" || perfilLinha === "Gerente") {

                linha.style.display = "none";

            }

        });

        return;

    }

    // ===========================
    // USUÁRIO
    // ===========================

    btnNovoUsuario.style.display = "none";

    linhas.forEach(linha => {

        const perfilLinha = linha.dataset.perfil;

        if (perfilLinha === "Administrador" || perfilLinha === "Gerente") {

            linha.style.display = "none";

        }

    });

    btnsEditar.forEach(botao => {

        botao.style.display = "none";

    });

    btnsExcluir.forEach(botao => {

        botao.style.display = "none";

    });

}

/* ======================================
   CONTROLE DO SELECT DE PERFIL
====================================== */

function controlarPerfilCadastro() {

    const select = document.getElementById("perfilUsuario");

    if (!select) return;

    const perfil = localStorage.getItem("perfilUsuario");

    if (perfil === "administrador") return;

    if (perfil === "gerente") {

        select.innerHTML = `
            <option value="usuario">Usuário</option>
        `;

    }

}