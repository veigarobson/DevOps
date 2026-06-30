document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        console.clear();
        console.log("===== NOVO CONTATO =====");
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Telefone:", telefone);
        console.log("Assunto:", assunto);
        console.log("Mensagem:", mensagem);
        console.log("========================");

        alert(`Obrigado, ${nome}!\n\nSua mensagem foi enviada com sucesso (simulação).`);

        formulario.reset();
    });

    // Destaca o campo quando recebe foco
    const campos = document.querySelectorAll("input, textarea");

    campos.forEach(campo => {
        campo.addEventListener("focus", () => {
            campo.style.borderColor = "#2563eb";
            campo.style.boxShadow = "0 0 5px rgba(37,99,235,.4)";
        });

        campo.addEventListener("blur", () => {
            campo.style.borderColor = "#ccc";
            campo.style.boxShadow = "none";
        });
    });
});