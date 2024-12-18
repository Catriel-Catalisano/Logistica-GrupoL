const fileInput = document.getElementById('file-input');
const dataDisplay = document.getElementById('data-display');
const message = document.getElementById('message');

// Tabla de lógica para determinar tipo de vehículo
const vehicleLogic = [
    { maxKg: 1500, tipo: "2 PALLETS" },
    { maxKg: 1700, tipo: "3 PALLETS" },
    { maxKg: 2000, tipo: "4 PALLETS" },
    { maxKg: 2500, tipo: "5 PALLETS" },
    { maxKg: 10000, tipo: "chasis" }

];
const baseDataFruver = {
    sucursales: [
        { sucursal: 'L´OREAL ARGENTINA', recorrido: 'BENAVIDEZ', direccion: 'Plataforma Logística NORLOG. Av. Presidente Perón, NO 4749 Benavidez, 06:30 a 12hs' },
{ sucursal: 'ALBANO COZZUOL S.A.', recorrido: 'BENAVIDEZ', direccion: 'GELLY Y OBES 1079, BENAVIDEZ, 07 a 21' },
{ sucursal: 'ALBANO COZZUOL S.A', recorrido: 'BENAVIDEZ', direccion: 'GELLY Y OBES 1079, BENAVIDEZ, 07 a 21' },
{ sucursal: 'SOC. PANAMERICANA PLAZA -SADESA-', recorrido: 'Caba Centro', direccion: 'PLAZA 4891, CABA, 06 a 08' },
{ sucursal: 'HSBC', recorrido: 'Caba Centro', direccion: 'FLORIDA 229, CABA, 7 a 8 30 hs ' },
{ sucursal: 'GOOGLE - MAFALDA', recorrido: 'Caba Centro', direccion: 'Alicia Moreau de Justo 388. Pi, CABA, 6 a 10 hs ' },
{ sucursal: 'GOOGLE - EL MERCADO', recorrido: 'Caba Centro', direccion: 'ALICIA MOREAU DE JUSTO 550, 1º, CABA, 6 a 10 hs ' },
{ sucursal: 'JP MORGAN LAVALLE', recorrido: 'Caba Centro', direccion: 'LAVALLE 1877, CABA, 7 a 10 hs ' },
{ sucursal: 'JP MORGAN MADERO', recorrido: 'Caba Centro', direccion: 'AV. MADERO 900. PIS0 23, CABA, 7 a 10 hs ' },
{ sucursal: 'LEVEL 3', recorrido: 'Caba Centro', direccion: 'ALFEREZ PAREJA 256, CABA, 07 A 12 HS' },
{ sucursal: 'HSBC FINE DINING', recorrido: 'Caba Centro', direccion: 'Av. E. Madero 540. Piso 23. Caba, CABA, 6 a 15 hs ' },
{ sucursal: 'NOVARTIS', recorrido: 'Caba Norte', direccion: 'RAMALLO 1851 1851, CABA, 6 a 9 hs ' },
{ sucursal: 'CLINICA ZABALA', recorrido: 'Caba Norte solo 1', direccion: 'Av. Cabildo 1295, CABA, 6 a 9 hs (DE SER NECESARIO ENTREGAR SOLO)' },
{ sucursal: 'JP MORGAN BELGRANO', recorrido: 'Caba Centro', direccion: 'belgrano 955, CABA 06 A 11 HS' },
{ sucursal: 'JOHNSON & JOHNSON FOOD BELGRANO', recorrido: 'Caba Norte', direccion: 'OLAZABAL 1260, CABA, 07 a 10hs' },
{ sucursal: 'INST. ALEXANDER FLEMING', recorrido: 'Caba Norte', direccion: 'ZABALA 2836, CABA, 6 a 11 :30 hs ' },
{ sucursal: 'NEW SAN ROQUE PEREZ', recorrido: 'Caba Norte', direccion: 'Roque Perez 3650, CABA, 7 a 12 hs ' },
{ sucursal: 'COCA COLA SAAVEDRA SRL', recorrido: 'Caba Norte', direccion: 'pico 4083, caba, 06 a 10 hs' },
{ sucursal: 'PAMPA ENERGIA MAIPU1', recorrido: 'Caba Retiro', direccion: 'MAIPU 1, CABA, 6 a 8 hs ' },
{ sucursal: 'TECHNOLOGY SUP.SERV.SA (UBER)', recorrido: 'Caba Retiro', direccion: 'Libertador 1000, CABA, 07 a 09' },
{ sucursal: 'TECHINT TORRES', recorrido: 'Caba Retiro', direccion: 'DELLA PAOLERA CARLOS 299, CABA, 7 a 11 hs ' },
{ sucursal: 'APM (TERMINAL 4 SA)', recorrido: 'Caba Retiro', direccion: 'ACCESO WILSON Y TOMAS ALBA EDISON, CABA, 6 a 11 hs ' },
{ sucursal: 'SANATORIO AGOTE', recorrido: 'Caba Retiro', direccion: 'DR. LUIS AGOTE 2477, CABA, 6 a 11 hs ' },
{ sucursal: 'TRP', recorrido: 'Caba Retiro', direccion: 'Ramon Castillo y Comodoro Py, CABA, 7 a 10 hs ' },
{ sucursal: 'TEMIS LOSTALO', recorrido: 'Caba Sur', direccion: 'Zepita 3178, CABA, 5:30 a 10 Hs ' },
{ sucursal: 'PFIZER', recorrido: 'Caba Sur', direccion: 'Carlos Berg 3669, CABA, 5 30 hs a 10 hs ' },
{ sucursal: 'HOSPITAL BRITANICO', recorrido: 'Caba Sur', direccion: 'PERDRIEL 74, CABA, 6 a 11 30 hs' },
{ sucursal: 'DHL INTERNACIONAL', recorrido: 'Caba Sur', direccion: 'Larrazabal 2295, CABA, 6 a 15 hs ' },
{ sucursal: 'VOLKSWAGEN FATIMA', recorrido: 'FATIMA', direccion: 'RUTA NAC. 8. 7135, FÁTIMA, 07 a 09' },
{ sucursal: 'JOHNSON & JOHNSON FOOD PILAR', recorrido: 'FATIMA', direccion: 'RUTA 8 KM 63.5 FATIMA - PILAR, FÁTIMA, 07 a 10' },
{ sucursal: 'SWIFT', recorrido: 'FATIMA', direccion: 'Arturo Frondizi calle 7 sin número, parque industrial PilarFranja horaria de recepción de 7 a 11hs, FÁTIMA, 07 a 11hs' },
{ sucursal: 'THE WALT DISNEY COMPANY', recorrido: 'FATIMA', direccion: 'RUTA 8, RAMAL PILAR KM. 47,5, PILAR, 06:30 a 11hs' },
{ sucursal: 'WHIRLPOOL FOOD', recorrido: 'FATIMA', direccion: 'RUTA NAC. 8. KM 64.5, FÁTIMA, 06 a 11' },
{ sucursal: 'BAYER PILAR II', recorrido: 'FATIMA', direccion: 'CALLE 3 Y DEL CANAL. PARQUE IN, PILAR, 08 a 12' },
{ sucursal: 'BAYER PILAR I', recorrido: 'FATIMA', direccion: 'CALLE 8 (E/ 5 y 6) PARQUE INDU, PILAR, 08 a 12' },
{ sucursal: 'FORD ARGENTINA', recorrido: 'FORD ARGENTINA + FORD MONTAJE SCA', direccion: 'Av. Henry Ford y Panamericana, 6 a 12' },
{ sucursal: 'FORD MONTAJE SCA', recorrido: 'FORD ARGENTINA + FORD MONTAJE SCA', direccion: 'AV. PTE. PERON 4640, FORD ARGENTINA + FORD MONTAJE SCA, 6 a 12' },
{ sucursal: 'MONDELEZ PACHECO', recorrido: 'MONDELEZ PACHECO', direccion: 'Av Henry Ford 1134, Gral. Pacheco, 6 a 10' },
{ sucursal: 'BAYER MUNRO', recorrido: 'MUNRO', direccion: 'RICARDO GUTIERREZ 3652, MUNRO, 06:30 a 08:30' },
{ sucursal: 'GIVAUDAN MUNRO', recorrido: 'MUNRO', direccion: 'SAN LORENZO 4759, MUNRO, 07 a 09' },
{ sucursal: 'P & G', recorrido: 'MUNRO', direccion: 'GOB. UGARTE 3561, MUNRO, 06 a 10hs' },
{ sucursal: 'NON STOP DIGITAL', recorrido: 'MUNRO', direccion: 'Manuel Belzu 4053, MUNRO, 7 a 11' },
{ sucursal: 'PLANTA ELABORADORA VEND', recorrido: 'MUNRO', direccion: 'Pedro Ignacio de Rivera 6061, MUNRO, 07 a 12' },
{ sucursal: 'IND. PLASTICAS POR INTR. (IPESA)', recorrido: 'Oeste 1', direccion: 'AV. M. T. DE ALVEAR 4266/71, Ciudadela, 7 a 11 hs' },
{ sucursal: 'PEUGEOT PALOMAR', recorrido: 'Oeste 1', direccion: 'Fray Mamerto Esquiu 902, VILLA BOSCH, 7 a 13 hs ' },
{ sucursal: 'CATALENT ARGENTINA SA', recorrido: 'Oeste 1', direccion: 'Av. Bernabe Marquez 691, LOMA HERMOSA, 06 a 11' },
{ sucursal: 'YPF GAS', recorrido: 'Oeste 2', direccion: 'AV. CROVARA 5299, SAN JUSTO, 6 A 7 hs ' },
{ sucursal: 'CLOROX ALDO BONZI', recorrido: 'Oeste 2', direccion: 'Castro Barros 2050, ALDO BONZI, 6 A 9 hs ' },
{ sucursal: 'NESTLE WATERS ARGENTINA', recorrido: 'Oeste 3', direccion: 'ACCESO OESTE KM 41.700, MORENO, 6 a 9 hs ' },
{ sucursal: 'LA ANONIMA', recorrido: 'Oeste 3', direccion: 'INTENDENTE PEREZ QUINTANA 3850, ITUZAINGO, 7 a 11 hs' },
{ sucursal: 'IAE UNIVERSIDAD AUSTRAL', recorrido: 'pilar', direccion: 'MARIANO ACOSTA 1663, PILAR, 7 a 9 maximo 12' },
{ sucursal: 'SALESFORCE ARG. PILAR', recorrido: 'pilar', direccion: 'Av. Sargento Mayor Beliera 3025, altura Km 59 Panamericana, pilar, pilar, 07 a 12hs' },
{ sucursal: 'SHELL DOCK SUD', recorrido: 'sur 1', direccion: 'Sargento Ponce 2318 Dock Sud, DOCK SUD, 6 a 9 hs ' },
{ sucursal: 'NEW SAN MONTE CHINGOLO', recorrido: 'sur 1', direccion: 'Kloosterman 2100 -, MONTE CHINGOLO, 7 a 11 hs' },
{ sucursal: 'ROCA', recorrido: 'sur 1', direccion: 'Camino Gral. Belgrano 2873, LANUS, 7 a 10 hs ' },
{ sucursal: 'PAMPA ENERGIA Avellaneda', recorrido: 'sur 1', direccion: 'URUGUAY 1115, AVELLANEDA, 7 a 11 hs' },
{ sucursal: 'NEW SAN AVELLANEDA - PILISAR S.A.', recorrido: 'sur 1', direccion: 'Coronel Molinedo 1600, AVELLANEDA, 6 a 13 hs ' },
{ sucursal: 'ZUCAMOR RANELAGH', recorrido: 'Sur 2', direccion: 'Av. Antartida Argentina, RANELAGH, 6 a 10 hs' },
{ sucursal: 'ZUCAMOR BERNAL', recorrido: 'Sur 2', direccion: 'Con. Gral. Belgrano km 14,7, QUILMES, 6 a 10 hs' },
{ sucursal: 'CEPAS QUILMES', recorrido: 'Sur 3', direccion: 'parque industrial burzaco, BURZACO, 4 a 9:30 hs Respetar ' },
{ sucursal: 'BIOGENESIS BAGO MONTEGRANDE', recorrido: 'Sur 3', direccion: '9 de Abril 1251, MONTE GRANDE, 6 a 10 hs' },
{ sucursal: 'ABBOTT LABORATORIES', recorrido: 'Sur 4', direccion: 'Av. Valentín Vergara  7989, INGENIERO JUAN ALLAN, 6 a 11 hs ' },
{ sucursal: 'BAGO LA PLATA', recorrido: 'Sur 4', direccion: 'CALLE 4. NRO. 1429, La PLAta , 6 a 11 hs ' },
{ sucursal: 'PAMPA ENERGIA ENSENADA BARRAGAN', recorrido: 'Sur 4', direccion: 'AV. DOMINGO MERCANTE Y ARROYO, Ensenada, 8 30 a 13 hs ' },
{ sucursal: 'OBLAK HERMANOS', recorrido: 'Sur oeste', direccion: 'Ciudadela Nº 5451,, VIRREY DEL PINO, 6 a 8 hs ' },
{ sucursal: 'COCA COLA EZEIZA', recorrido: 'Sur oeste', direccion: 'PUENTE DEL INCA 2450. POLO IND, EZEIZA, 6 a 11 hs ' },
{ sucursal: 'MERCEDES BENZ ARGENTINA S.A.U.', recorrido: 'Sur oeste', direccion: 'RUTA NAC. Nº 3. KM 43.500, VIRREY DEL PINO, 7 a 14 hs ' },
{ sucursal: 'PAMPA ENERGIA GENELBA', recorrido: 'Sur oeste', direccion: 'RUTA 3. KM 49,5, Marcos Paz, 7 A 15 HS ' },
{ sucursal: 'NESTLE PACHECO', recorrido: 'talar de pacheco', direccion: 'Panamericana km 29, EL TALAR DE PACHECO, 07 a 10:30' },
{ sucursal: 'TPL', recorrido: 'talar de pacheco', direccion: 'Ruta 197 2999, EL TALAR DE PACHECO, 07 a 12' },
{ sucursal: 'PEUGEOT PACHECO', recorrido: 'talar de pacheco', direccion: 'Marcos Sastre 1014, EL TALAR DE PACHECO, 07 a 15hs' },
{ sucursal: 'TETRA PAK', recorrido: 'tigre', direccion: 'Uruguay 2887, VICTORIA, 6 a 7' },
{ sucursal: 'LAB. GLAXO SMITH KLINE S.A.', recorrido: 'tigre', direccion: 'CARLOS CASARES 3690, VICTORIA, 6 a 8 máximo 11hs' },
{ sucursal: 'SAN ANDRES CAMPUS', recorrido: 'TIGRE solo 1', direccion: 'CALLE DON MARIANO. ALTURA URUG, SAN FERNANDO, 6 a 7, 9 a 11 y 13 a 15 (DE SER NECESARIO ENTREGARLO SOLO)' },
{ sucursal: 'LINDE FOOD', recorrido: 'tigre', direccion: 'SAAVEDRA 2251, TIGRE, 6 a 10' },
{ sucursal: 'MONDELEZ VICTORIA', recorrido: 'tigre', direccion: 'Uruguay 3911, VICTORIA, 6 a 12' },
{ sucursal: 'GESTAMP PLANTA III', recorrido: 'Tortuguitas', direccion: 'Panamericana km 48,, ESCOBAR, 06:30 a 08 hasta las 10hs maximo' },
{ sucursal: 'BIOGENESIS BAGO GARIN', recorrido: 'Tortuguitas', direccion: 'Ruta Panamericana km 38,5., GARIN, 07 a 10hs' },
{ sucursal: 'PAPELERA DEL PLATA TORTUGUITAS', recorrido: 'Tortuguitas', direccion: 'Otto Krause 4950, Tortuguitas, a confirmar' },
{ sucursal: 'FINNING ARGENTINA SA', recorrido: 'Tortuguitas', direccion: 'VENEZUELA 4021, Tortuguitas, 6 a 16' },
{ sucursal: 'ORBIS', recorrido: 'VILLA ADELINA', direccion: 'YERBAL 1200, VILLA ADELINA, 06 a 10' },
{ sucursal: 'IVAX ARGENTINA', recorrido: 'VILLA ADELINA', direccion: 'Juan Jose Castelli 6701, VILLA ADELINA, 07 a 11hs' },
{ sucursal: 'BIC ARGENTINA', recorrido: 'VILLA ADELINA', direccion: 'Colectora Panamericana este 2121, boulogne, san isidro, BOULOGNE, 07 a 12' },
{ sucursal: 'LAB. PHOENIX SAIC Y F', recorrido: 'villa de mayo', direccion: 'AV. GRAL. LEMOS 2809, VILLA DE MAYO, 06 a 09' },
{ sucursal: 'GIVAUDAN MALVINAS ARGENTINAS', recorrido: 'villa de mayo', direccion: 'COLECTORA OESTE PANAMERICANA K, MALVINAS ARGENTINAS, 7 a 10' },
{ sucursal: 'VOLKSWAGEN PACHECO', recorrido: 'VOLKSWAGEN PACHECO', direccion: 'DELCASSE Y AV. HENRY FORD S/N, Gral. Pacheco, 06 a 09' },
{ sucursal: 'SAN ANDRES OLIVOS', recorrido: 'Vte Lopez', direccion: 'NOGOYA 550., OLIVOS, 06:00 a 7:00 y de 9:00 a 11:30' },
{ sucursal: 'SANDOZ', recorrido: 'Vte Lopez', direccion: 'ACASUSSO 3780, OLIVOS, 7 a 15' },
{ sucursal: 'PAPELERA DEL PLATA ZARATE', recorrido: 'ZARATE', direccion: 'Camino de la Costa Brava Km. 7, ZARATE, 06 a 10' },
{ sucursal: 'BAYER ZARATE', recorrido: 'ZARATE', direccion: 'CAMINO DE LA COSTA BRAVA S/N, ZARATE, 06 a 10' },
{ sucursal: 'PAMPA ENERGIA ZARATE', recorrido: 'ZARATE', direccion: 'RUTA 6 (EX RUTA 12) KM 83,50, ZARATE, 7 a 15' },
{ sucursal: 'MONSANTO ZARATE CONTRATISTAS', recorrido: 'ZARATE', direccion: 'RUTA 6 KM 83,1. (PROVEEDORES), ZARATE, 07 a 19hs' },
{ sucursal: 'MONSANTO ZARATE', recorrido: 'ZARATE', direccion: 'RUTA 6 KM 83,1. PUERTA 2 (PROV, ZARATE, 07 a 19hs' },
{ sucursal: 'QBOX', recorrido: 'ZARATE', direccion: 'Ruta Nac.Nro.6. KM 193,5, CAMPANA, 7 a 18' },
{ sucursal: 'SWIFT PONTEVEDRA', recorrido: 'Sur oeste', direccion: 'Av. Otero 5250, Pontevedra, 07 a 12hs' }

  
    ]
};
// Evento para cargar archivo
document.getElementById('addPlan').addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        try {
            // Leer archivo
            const data = await file.text();
            const rows = data.split('\n').map(row => row.split(',').map(cell => cell.trim()));
            const headers = rows[0].map(h => h.toLowerCase());

            if (!validateHeaders(headers)) {
                throw new Error('El archivo no tiene las columnas requeridas: sucursal, demanda de kg.');
            }

            const assignments = processAssignments(rows.slice(1), headers);
            displayTable(assignments);
            message.textContent = 'Archivo procesado exitosamente.';
        } catch (error) {
            message.textContent = error.message;
        }
    }
});

// Validar encabezados
function validateHeaders(headers) {
    const requiredHeaders = ['sucursal', 'demanda de kg'];
    return requiredHeaders.every(header => headers.includes(header));
}

// Procesar asignaciones
function processAssignments(dataRows, headers) {
    const assignments = {};

    dataRows.forEach(row => {
        if (row.length < 2) return; // Evita filas vacías o incompletas
        const sucursal = row[headers.indexOf('sucursal')];
        const demanda = parseFloat(row[headers.indexOf('demanda de kg')]);

        if (isNaN(demanda)) return; // Evitar datos inválidos

        const sucursalData = baseDataFruver.sucursales.find(s => s.sucursal === sucursal);

        if (sucursalData) {
            const { recorrido, direccion } = sucursalData;

            if (!assignments[recorrido]) {
                assignments[recorrido] = { 
                    recorrido, 
                    sucursales: [], 
                    direcciones: [], 
                    totalKg: 0 
                };
            }

            assignments[recorrido].sucursales.push(sucursal);
            assignments[recorrido].direcciones.push(direccion);
            assignments[recorrido].totalKg += demanda;
        } else {
            console.warn(`Sucursal no encontrada en la base de datos: ${sucursal}`);
        }
    });

    // Agregar tipo de vehículo basado en el total de kg
    return Object.values(assignments).map(a => ({
        ...a,
        tipoVehiculo: determineVehicleType(a.totalKg),
        direcciones: a.direcciones.join(' + ')
    }));
}

// Determinar tipo de vehículo
function determineVehicleType(kg) {
    for (let logic of vehicleLogic) {
        if (kg <= logic.maxKg) {
            return logic.tipo;
        }
    }
    return "No definido";
}

// Mostrar tabla de resultados
function displayTable(assignments) {
    if (assignments.length === 0) {
        dataDisplay.innerHTML = '<p>No se encontraron asignaciones válidas.</p>';
        return;
    }

    dataDisplay.innerHTML = `
        <table class="styled-table" id="assignmentsTable">
            <thead>
                <tr>
                    <th>Recorrido</th>
                    <th>Sucursales</th>
                    <th>Direcciones</th>
                    <th>Kg Total</th>
                    <th>Tipo de Vehículo</th>
                </tr>
            </thead>
            <tbody>
                ${assignments.map(a => `
                    <tr>
                        <td>${a.recorrido}</td>
                        <td>${a.sucursales.join(', ')}</td>
                        <td>${a.direcciones}</td>
                        <td>${a.totalKg.toFixed(2)} kg</td>
                        <td>${a.tipoVehiculo}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <button id="exportButton">Exportar a Excel</button>
    `;

    document.getElementById('exportButton').addEventListener('click', () => exportToExcel(assignments));
}

// Exportar a Excel
function exportToExcel(assignments) {
    const rows = [
        ["Recorrido", "Sucursales", "Direcciones", "Kg Total", "Tipo de Vehículo"],
        ...assignments.map(a => [
            a.recorrido,
            a.sucursales.join(', '),
            a.direcciones,
            `${a.totalKg.toFixed(2)} kg`,
            a.tipoVehiculo
        ])
    ];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Asignaciones Fru-Ver");
    XLSX.writeFile(workbook, "asignaciones_fruver.xlsx");
}