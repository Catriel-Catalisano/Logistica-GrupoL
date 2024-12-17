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
        { sucursal: 'L´OREAL ARGENTINA', recorrido: 'BENAVIDEZ', direccion: 'Plataforma Logística NORLOG. Av. Presidente Perón, NO 4749 Benavidez,' },
        { sucursal: 'ALBANO COZZUOL S.A.', recorrido: 'BENAVIDEZ', direccion: 'GELLY Y OBES 1079' },
        { sucursal: 'SOC. PANAMERICANA PLAZA -SADESA-', recorrido: 'Caba Centro', direccion: 'PLAZA 4891' },
        { sucursal: 'HSBC', recorrido: 'Caba Centro', direccion: 'FLORIDA 229' },
        { sucursal: 'GOOGLE - MAFALDA', recorrido: 'Caba Centro', direccion: 'Alicia Moreau de Justo 388. Pi' },
        { sucursal: 'GOOGLE - EL MERCADO', recorrido: 'Caba Centro', direccion: 'ALICIA MOREAU DE JUSTO 550, 1º' },
        { sucursal: 'JP MORGAN LAVALLE', recorrido: 'Caba Centro', direccion: 'LAVALLE 1877' },
        { sucursal: 'JP MORGAN MADERO', recorrido: 'Caba Centro', direccion: 'AV. MADERO 900. PIS0 23' },
        { sucursal: 'LEVEL 3', recorrido: 'Caba Centro', direccion: 'ALFEREZ PAREJA 256' },
        { sucursal: 'HSBC FINE DINING', recorrido: 'Caba Centro', direccion: 'Av. E. Madero 540. Piso 23. Caba' },
        { sucursal: 'NOVARTIS', recorrido: 'Caba Norte', direccion: 'RAMALLO 1851 1851' },
        { sucursal: 'CLINICA ZABALA', recorrido: 'Caba Norte solo 1', direccion: 'Av. Cabildo 1295' },
        { sucursal: 'JP MORGAN BELGRANO', recorrido: 'Caba Centro', direccion: 'belgrano 955' },
        { sucursal: 'JOHNSON & JOHNSON FOOD BELGRANO', recorrido: 'Caba Norte', direccion: 'OLAZABAL 1260' },
        { sucursal: 'INST. ALEXANDER FLEMING', recorrido: 'Caba Norte', direccion: 'ZABALA 2836' },
        { sucursal: 'NEW SAN ROQUE PEREZ', recorrido: 'Caba Norte', direccion: 'Roque Perez 3650' },
        { sucursal: 'COCA COLA SAAVEDRA SRL', recorrido: 'Caba Norte', direccion: 'pico 4083' },
        { sucursal: 'PAMPA ENERGIA MAIPU1', recorrido: 'Caba Retiro', direccion: 'MAIPU 1' },
        { sucursal: 'TECHNOLOGY SUP.SERV.SA (UBER)', recorrido: 'Caba Retiro', direccion: 'Libertador 1000' },
        { sucursal: 'TECHINT TORRES', recorrido: 'Caba Retiro', direccion: 'DELLA PAOLERA CARLOS 299' },
        { sucursal: 'APM (TERMINAL 4 SA)', recorrido: 'Caba Retiro', direccion: 'ACCESO WILSON Y TOMAS ALBA EDISON' },
        { sucursal: 'SANATORIO AGOTE', recorrido: 'Caba Retiro', direccion: 'DR. LUIS AGOTE 2477' },
        { sucursal: 'TRP', recorrido: 'Caba Retiro', direccion: 'Ramon Castillo y Comodoro Py' },
        { sucursal: 'TEMIS LOSTALO', recorrido: 'Caba Sur', direccion: 'Zepita 3178' },
        { sucursal: 'PFIZER', recorrido: 'Caba Sur', direccion: 'Carlos Berg 3669' },
        { sucursal: 'HOSPITAL BRITANICO', recorrido: 'Caba Sur', direccion: 'PERDRIEL 74' },
        { sucursal: 'DHL INTERNACIONAL', recorrido: 'Caba Sur', direccion: 'Larrazabal 2295' },
        { sucursal: 'VOLKSWAGEN FATIMA', recorrido: 'FATIMA', direccion: 'RUTA NAC. 8. 7135' },
        { sucursal: 'JOHNSON & JOHNSON FOOD PILAR', recorrido: 'FATIMA', direccion: 'RUTA 8 KM 63.5 FATIMA - PILAR' },
{ sucursal: 'SWIFT', recorrido: 'FATIMA', direccion: 'Arturo Frondizi calle 7 sin número, parque industrial PilarFranja horaria de recepción de 7 a 11hs'},
{ sucursal: 'THE WALT DISNEY COMPANY', recorrido: 'FATIMA', direccion: 'RUTA 8, RAMAL PILAR KM. 47,5' },
{ sucursal: 'WHIRLPOOL FOOD', recorrido: 'FATIMA', direccion: 'RUTA NAC. 8. KM 64.5' },
{ sucursal: 'BAYER PILAR II', recorrido: 'FATIMA', direccion: 'CALLE 3 Y DEL CANAL. PARQUE IN' },
{ sucursal: 'BAYER PILAR I', recorrido: 'FATIMA', direccion: 'CALLE 8 (E/ 5 y 6) PARQUE INDU' },
{ sucursal: 'FORD ARGENTINA', recorrido: 'FORD ARGENTINA + FORD MONTAJE SCA', direccion: 'Av. Henry Ford y Panamericana' },
{ sucursal: 'FORD MONTAJE SCA', recorrido: 'FORD ARGENTINA + FORD MONTAJE SCA', direccion: 'AV. PTE. PERON 4640' },
{ sucursal: 'MONDELEZ PACHECO', recorrido: 'MONDELEZ PACHECO', direccion: 'Av Henry Ford 1134' },
{ sucursal: 'BAYER MUNRO', recorrido: 'MUNRO', direccion: 'RICARDO GUTIERREZ 3652' },
{ sucursal: 'GIVAUDAN MUNRO', recorrido: 'MUNRO', direccion: 'SAN LORENZO 4759' },
{ sucursal: 'P & G', recorrido: 'MUNRO', direccion: 'GOB. UGARTE 3561' },
{ sucursal: 'NON STOP DIGITAL', recorrido: 'MUNRO', direccion: 'Manuel Belzu 4053' },
{ sucursal: 'PLANTA ELABORADORA VEND', recorrido: 'MUNRO', direccion: 'Pedro Ignacio de Rivera 6061' },
{ sucursal: 'IND. PLASTICAS POR INTR. (IPESA)', recorrido: 'Oeste 1', direccion: 'AV. M. T. DE ALVEAR 4266/71' },
{ sucursal: 'PEUGEOT PALOMAR', recorrido: 'Oeste 1', direccion: 'Fray Mamerto Esquiu 902' },
{ sucursal: 'CATALENT ARGENTINA SA', recorrido: 'Oeste 1', direccion: 'Av. Bernabe Marquez 691' },
{ sucursal: 'YPF GAS', recorrido: 'Oeste 2', direccion: 'AV. CROVARA 5299' },
{ sucursal: 'CLOROX ALDO BONZI', recorrido: 'Oeste 2', direccion: 'Castro Barros 2050' },
{ sucursal: 'NESTLE WATERS ARGENTINA', recorrido: 'Oeste 3', direccion: 'ACCESO OESTE KM 41.700' },
{ sucursal: 'LA ANONIMA', recorrido: 'Oeste 3', direccion: 'INTENDENTE PEREZ QUINTANA 3850' },
{ sucursal: 'IAE UNIVERSIDAD AUSTRAL', recorrido: 'pilar', direccion: 'MARIANO ACOSTA 1663' },
{ sucursal: 'SALESFORCE ARG. PILAR', recorrido: 'pilar', direccion: 'Av. Sargento Mayor Beliera 3025, altura Km 59 Panamericana, pilar' },
{ sucursal: 'SHELL DOCK SUD', recorrido: 'sur 1', direccion: 'Sargento Ponce 2318 Dock Sud' },
{ sucursal: 'NEW SAN MONTE CHINGOLO', recorrido: 'sur 1', direccion: 'Kloosterman 2100 -' },
{ sucursal: 'ROCA', recorrido: 'sur 1', direccion: 'Camino Gral. Belgrano 2873' },
{ sucursal: 'PAMPA ENERGIA Avellaneda', recorrido: 'sur 1', direccion: 'URUGUAY 1115' },
{ sucursal: 'NEW SAN AVELLANEDA - PILISAR S.A.', recorrido: 'sur 1', direccion: 'Coronel Molinedo 1600' },
{ sucursal: 'ZUCAMOR RANELAGH', recorrido: 'Sur 2', direccion: 'Av. Antartida Argentina' },
{ sucursal: 'ZUCAMOR BERNAL', recorrido: 'Sur 2', direccion: 'Con. Gral. Belgrano km 14,7' },
{ sucursal: 'CEPAS QUILMES', recorrido: 'Sur 3', direccion: 'parque industrial burzaco' },
{ sucursal: 'BIOGENESIS BAGO MONTEGRANDE', recorrido: 'Sur 3', direccion: '9 de Abril 1251' },
{ sucursal: 'ABBOTT LABORATORIES', recorrido: 'Sur 4', direccion: 'Av. Valentín Vergara  7989' },
{ sucursal: 'BAGO LA PLATA', recorrido: 'Sur 4', direccion: 'CALLE 4. NRO. 1429' },
{ sucursal: 'PAMPA ENERGIA ENSENADA BARRAGAN', recorrido: 'Sur 4', direccion: 'AV. DOMINGO MERCANTE Y ARROYO' },
{ sucursal: 'OBLAK HERMANOS', recorrido: 'Sur oeste', direccion: 'Ciudadela Nº 5451,' },
{ sucursal: 'COCA COLA EZEIZA', recorrido: 'Sur oeste', direccion: 'PUENTE DEL INCA 2450. POLO IND' },
{ sucursal: 'MERCEDES BENZ ARGENTINA S.A.U.', recorrido: 'Sur oeste', direccion: 'RUTA NAC. Nº 3. KM 43.500' },
{ sucursal: 'PAMPA ENERGIA GENELBA', recorrido: 'Sur oeste', direccion: 'RUTA 3. KM 49,5' },
{ sucursal: 'NESTLE PACHECO', recorrido: 'talar de pacheco', direccion: 'Panamericana km 29' },
{ sucursal: 'TPL', recorrido: 'talar de pacheco', direccion: 'Ruta 197 2999' },
{ sucursal: 'PEUGEOT PACHECO', recorrido: 'talar de pacheco', direccion: 'Marcos Sastre 1014' },
{ sucursal: 'TETRA PAK', recorrido: 'tigre', direccion: 'Uruguay 2887' },
{ sucursal: 'LAB. GLAXO SMITH KLINE S.A.', recorrido: 'tigre', direccion: 'CARLOS CASARES 3690' },
{ sucursal: 'SAN ANDRES CAMPUS', recorrido: 'TIGRE solo 1', direccion: 'CALLE DON MARIANO. ALTURA URUG' },
{ sucursal: 'LINDE FOOD', recorrido: 'tigre', direccion: 'SAAVEDRA 2251' },
{ sucursal: 'MONDELEZ VICTORIA', recorrido: 'tigre', direccion: 'Uruguay 3911' },
{ sucursal: 'GESTAMP PLANTA III', recorrido: 'Tortuguitas', direccion: 'Panamericana km 48,' },
{ sucursal: 'BIOGENESIS BAGO GARIN', recorrido: 'Tortuguitas', direccion: 'Ruta Panamericana km 38,5.' },
{ sucursal: 'PAPELERA DEL PLATA TORTUGUITAS', recorrido: 'Tortuguitas', direccion: 'Otto Krause 4950' },
{ sucursal: 'FINNING ARGENTINA SA', recorrido: 'Tortuguitas', direccion: 'VENEZUELA 4021' },
{ sucursal: 'ORBIS', recorrido: 'VILLA ADELINA', direccion: 'YERBAL 1200' },
{ sucursal: 'IVAX ARGENTINA', recorrido: 'VILLA ADELINA', direccion: 'Juan Jose Castelli 6701' }
  
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
            console.log("Contenido del archivo:", data); // DEBUG: Ver el contenido
            const rows = data.split('\n').map(row => row.split(',').map(cell => cell.trim()));
            console.log("Filas procesadas:", rows); // DEBUG: Ver filas divididas

            const headers = rows[0].map(h => h.toLowerCase());
            console.log("Encabezados encontrados:", headers); // DEBUG: Ver encabezados

            if (!validateHeaders(headers)) {
                throw new Error('El archivo no tiene las columnas requeridas: sucursal, demanda de kg.');
            }

            const assignments = processAssignments(rows.slice(1), headers);
            console.log("Asignaciones procesadas:", assignments); // DEBUG: Ver asignaciones

            displayTable(assignments);
            message.textContent = 'Archivo procesado exitosamente.';
        } catch (error) {
            console.error("Error encontrado:", error); // DEBUG: Mostrar errores en la consola
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
            const { recorrido } = sucursalData;

            if (!assignments[recorrido]) {
                assignments[recorrido] = { recorrido, sucursales: [], totalKg: 0 };
            }

            assignments[recorrido].sucursales.push(sucursal);
            assignments[recorrido].totalKg += demanda;
        } else {
            console.warn(`Sucursal no encontrada en la base de datos: ${sucursal}`);
        }
    });

    // Agregar tipo de vehículo basado en el total de kg
    return Object.values(assignments).map(a => ({
        ...a,
        tipoVehiculo: determineVehicleType(a.totalKg)
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
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Recorrido</th>
                    <th>Sucursales</th>
                    <th>Kg Total</th>
                    <th>Tipo de Vehículo</th>
                </tr>
            </thead>
            <tbody>
                ${assignments.map(a => `
                    <tr>
                        <td>${a.recorrido}</td>
                        <td>${a.sucursales.join(', ')}</td>
                        <td>${a.totalKg.toFixed(2)} kg</td>
                        <td>${a.tipoVehiculo}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}