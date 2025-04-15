// Manejo de usuarios
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Crear una nueva fila en la tabla de usuarios
    const userTable = document.getElementById('user-list').getElementsByTagName('tbody')[0];
    const newUserRow = userTable.insertRow();

    // Insertar celdas en la nueva fila
    newUserRow.insertCell(0).innerText = userTable.rows.length;
    newUserRow.insertCell(1).innerText = username;
    newUserRow.insertCell(2).innerText = email;

    // Agregar acciones
    const userActionsCell = newUserRow.insertCell(3);
    userActionsCell.innerHTML = `<button class="btn btn-danger" onclick="deleteUserRow(this)">Eliminar</button>`;

    // Limpiar el formulario
    document.getElementById('user-form').reset();
});

// Función para eliminar una fila de usuarios
function deleteUserRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
