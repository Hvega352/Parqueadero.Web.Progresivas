document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Ingresar el usuario y la contraseña
    const validUsername = "Grupo8";
    const validPassword = "Grupo8";

    if (username === validUsername && password === validPassword) {
        window.location.href = "index.html";
    } else {
        document.getElementById('error').textContent = "Credenciales incorrectas. Intenta nuevamente.";
    }
});
