const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Grupol1', // <-- poné tu contraseña si tiene
    database: 'logistica_db' // <-- asegurate de que esta sea tu base
});

connection.connect(err => {
    if (err) {
        console.error('❌ Error de conexión a MySQL:', err.message);
        return;
    }
    console.log('✅ Conectado a MySQL');
});

// Ruta para guardar las asignaciones
app.post('/guardar-asignaciones', (req, res) => {
    const datos = req.body;

    const sql = `
        INSERT INTO asignaciones (
            Status, Planificación, FECHA, Site, HORARIO, AYUDANTE, CHOFER, PATENTE,
            CLIENTE, Recorrido, Vuelta, Observaciones, OBSERVACIONES_2, Articulos,
            Resumen_para_citaciones, KILOS, SUCURSALES, TELEFONO, CAPACIDAD,
            porcentaje_ocupacion, CONTROL, Ocupación
        ) VALUES ?
    `;

    const values = datos.map(d => [
        d.status, d.planificacion, d.fecha, d.site, d.horario, d.ayudante, d.chofer,
        d.patente, d.cliente, d.recorrido, d.vuelta, d.observaciones, d.observaciones2,
        d.articulos, d.resumen_para_citaciones, d.kilos, d.sucursales, d.telefono,
        d.capacidad, d.porcentaje_ocupa, d.control, d.ocupacion
    ]);

    connection.query(sql, [values], (err, result) => {
        if (err) {
            console.error('❌ Error al insertar:', err.message);
            return res.status(500).send('Error al guardar en MySQL');
        }
        res.send('Datos guardados correctamente en MySQL');
    });
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
