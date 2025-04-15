// dashboard.js

let vehicleId = 1;
let userId = 1;

document.getElementById('vehicleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const brand = document.getElementById('vehicleBrand').value;
    const model = document.getElementById('vehicleModel').value;
    const year = document.getElementById('vehicleYear').value;
    const plate = document.getElementById('vehiclePlate').value;

    const vehicleTable = document.getElementById('vehicleTable').getElementsByTagName('tbody')[0];
    const newRow = vehicleTable.insertRow();

    newRow.innerHTML = `
        <td>${vehicleId++}</td>
        <td>${brand}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${plate}</td>
        <td><button onclick="deleteVehicle(this)">Eliminar</button></td>
    `;

    document.getElementById('vehicleForm').reset();
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = userTable.insertRow();

    newRow.innerHTML = `
        <td>${userId++}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td><button onclick="deleteUser(this)">Eliminar</button></td>
    `;

    document.getElementById('userForm').reset();
});

function deleteVehicle(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

