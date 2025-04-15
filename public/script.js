document.addEventListener('DOMContentLoaded', function() {
    // Código para el formulario de vehículos
    const vehicleForm = document.getElementById('vehicle-form');
    if (vehicleForm) {
        vehicleForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener los valores de los campos
            const brand = document.getElementById('brand').value;
            const model = document.getElementById('model').value;
            const year = document.getElementById('year').value;
            const plate = document.getElementById('plate').value;

            // Crear una nueva fila en la tabla
            const table = document.getElementById('vehicle-list').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();

            // Insertar celdas en la nueva fila
            newRow.insertCell(0).innerText = table.rows.length;
            newRow.insertCell(1).innerText = brand;
            newRow.insertCell(2).innerText = model;
            newRow.insertCell(3).innerText = year;
            newRow.insertCell(4).innerText = plate;

            // Agregar acciones
            const actionsCell = newRow.insertCell(5);
            actionsCell.innerHTML = `<button onclick="deleteRow(this)">Eliminar</button>`;

            // Limpiar el formulario
            vehicleForm.reset();
        });
    }

    // Función para eliminar una fila
    window.deleteRow = function(button) {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    // Función para simular diferentes dispositivos
    window.simulateDevice = function(deviceType) {
        console.log('simulateDevice called', deviceType);

        // Elimina las clases existentes del body
        document.body.classList.remove('mobile', 'tablet', 'desktop');

        // Agrega la nueva clase
        document.body.classList.add(deviceType);

        // Guarda el estado en localStorage
        localStorage.setItem('device', deviceType);
    }
});
