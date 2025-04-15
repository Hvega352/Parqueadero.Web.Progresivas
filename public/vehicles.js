// Manejo de vehículos
document.getElementById('vehicle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const plate = document.getElementById('plate').value;

    // Crear una nueva fila en la tabla de vehículos
    const vehicleTable = document.getElementById('vehicle-list').getElementsByTagName('tbody')[0];
    const newVehicleRow = vehicleTable.insertRow();

    // Insertar celdas en la nueva fila
    newVehicleRow.insertCell(0).innerText = vehicleTable.rows.length;
    newVehicleRow.insertCell(1).innerText = brand;
    newVehicleRow.insertCell(2).innerText = model;
    newVehicleRow.insertCell(3).innerText = year;
    newVehicleRow.insertCell(4).innerText = plate;

    // Agregar acciones
    const vehicleActionsCell = newVehicleRow.insertCell(5);
    vehicleActionsCell.innerHTML = `<button class="btn btn-danger" onclick="deleteVehicleRow(this)">Eliminar</button>`;

    // Limpiar el formulario
    document.getElementById('vehicle-form').reset();
});

// Función para eliminar una fila de vehículos
function deleteVehicleRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
