// usuarios.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Crear un nuevo usuario
router.post('/usuarios', (req, res) => {
    const { nombre, correo, telefono } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, correo, telefono) VALUES (?, ?, ?)';
    
    db.query(sql, [nombre, correo, telefono], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId, nombre, correo, telefono });
    });
});

// Obtener todos los usuarios
router.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
});

// Obtener un usuario por ID
router.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM usuarios WHERE id = ?';

    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send('Usuario no encontrado');
        res.status(200).json(results[0]);
    });
});

// Actualizar un usuario
router.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, correo, telefono } = req.body;
    const sql = 'UPDATE usuarios SET nombre = ?, correo = ?, telefono = ? WHERE id = ?';

    db.query(sql, [nombre, correo, telefono, id], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.affectedRows === 0) return res.status(404).send('Usuario no encontrado');
        res.status(200).send('Usuario actualizado');
    });
});

// Eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuarios WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.affectedRows === 0) return res.status(404).send('Usuario no encontrado');
        res.status(200).send('Usuario eliminado');
    });
});

module.exports = router;
