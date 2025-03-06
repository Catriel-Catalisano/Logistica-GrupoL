const fileInput = document.getElementById('file-input');
const dataDisplay = document.getElementById('data-display');
const message = document.getElementById('message');

// Tabla de lógica para determinar tipo de vehículo
const vehicleLogic = [
    { maxKg: 500, tipo: "2 PALLETS (chica)" },
    { maxKg: 650, tipo: "2 PALLETS (grande)" },
    { maxKg: 850, tipo: "3 PALLETS" },
    { maxKg: 1200, tipo: "4 PALLETS" },
    { maxKg: 1600, tipo: "6 PALLETS" },
    { maxKg: 4000, tipo: "8 PALLETS" },
    { maxKg: 15000, tipo: "CHASIS" }

];
const baseDataFruver = {
    sucursales: [
        { sucursal: 'L´OREAL ARGENTINA', recorrido: 'BENAVI1', direccion: 'Plataforma Logística NORLOG. Av. Presidente Perón, NO 4749 Benavidez, 06:30 a 12hs ' },
        { sucursal: 'ALBANO COZZUOL S.A', recorrido: 'BENAVI2', direccion: 'GELLY Y OBES 1079, BENAVIDEZ, 07 a 21 ' },
        { sucursal: 'SOC. PANAMERICANA PLAZA -SADESA-', recorrido: 'CABACEN1', direccion: 'PLAZA 4891, CABA, 06 a 08 ' },
        { sucursal: 'HSBC', recorrido: 'CABACEN2', direccion: 'FLORIDA 229, CABA, 7 a 8 30 hs  ' },
        { sucursal: 'GOOGLE - MAFALDA', recorrido: 'CABACEN3', direccion: 'Alicia Moreau de Justo 388. Pi, CABA, 6 a 10 hs  ' },
        { sucursal: 'GOOGLE - EL MERCADO', recorrido: 'CABACEN4', direccion: 'ALICIA MOREAU DE JUSTO 550, 1º, CABA, 6 a 10 hs  ' },
        { sucursal: 'JP MORGAN LAVALLE', recorrido: 'CABACEN5', direccion: 'LAVALLE 1877, CABA, 7 a 10 hs  ' },
        { sucursal: 'JPMORGAN MADERO ', recorrido: 'CABACEN6', direccion: 'AV. MADERO 900. PIS0 23, CABA, 7 a 10 hs  ' },
        { sucursal: 'LEVEL 3', recorrido: 'CABACEN8', direccion: 'ALFEREZ PAREJA 256, CABA, 07 A 12 HS ' },
        { sucursal: 'HSBC FINE DINING', recorrido: 'CABACEN9', direccion: 'Av. E. Madero 540. Piso 23. Caba, CABA, 6 a 15 hs  ' },
        { sucursal: 'NOVARTIS', recorrido: 'CABANOR1', direccion: 'RAMALLO 1851 1851, CABA, 6 a 9 hs  ' },
        { sucursal: 'CLINICA ZABALA', recorrido: 'CABANS1', direccion: 'Av. Cabildo 1295, CABA, 6 a 9 hs (DE SER NECESARIO ENTREGAR SOLO) ' },
        { sucursal: 'JP MORGAN BELGRANO ', recorrido: 'CABACEN7', direccion: 'belgrano 955, CABA 06 A 11 HS ' },
        { sucursal: 'JOHNSON & JOHNSON FOOD BELGRAN', recorrido: 'CABANOR2', direccion: 'OLAZABAL 1260, CABA, 07 a 10hs ' },
        { sucursal: 'INST. ALEXANDER FLEMING', recorrido: 'CABANOR3', direccion: 'ZABALA 2836, CABA, 6 a 11 :30 hs  ' },
        { sucursal: 'NEW SAN ROQUE PEREZ', recorrido: 'CABANOR4', direccion: 'Roque Perez 3650, CABA, 7 a 12 hs  ' },
        { sucursal: 'COCA COLA SAAVEDRA SRL', recorrido: 'CABANOR5', direccion: 'pico 4083, caba, 06 a 10 hs ' },
        { sucursal: 'PAMPA ENERGIA MAIPU1', recorrido: 'CABA-R1', direccion: 'MAIPU 1, CABA, 6 a 8 hs  ' },
        { sucursal: 'TECHNOLOGY SUP.SERV.SA (UBER)', recorrido: 'CABA-R2', direccion: 'Libertador 1000, CABA, 07 a 09 ' },
        { sucursal: 'TECHINT TORRES', recorrido: 'CABA-R4', direccion: 'DELLA PAOLERA CARLOS 299, CABA, 7 a 11 hs  ' },
        { sucursal: 'APM TERMINAL', recorrido: 'CABA-R5', direccion: 'ACCESO WILSON Y TOMAS ALBA EDISON, CABA, 6 a 11 hs  ' },
        { sucursal: 'SANATORIO AGOTE', recorrido: 'CABA-R6', direccion: 'DR. LUIS AGOTE 2477, CABA, 6 a 11 hs  ' },
        { sucursal: 'TRP', recorrido: 'CABA-R3', direccion: 'Ramon Castillo y Comodoro Py, CABA, 7 a 10 hs  ' },
        { sucursal: 'TEMIS LOSTALO', recorrido: 'CABASUR1', direccion: 'Zepita 3178, CABA, 5:30 a 10 Hs  ' },
        { sucursal: 'PFIZER', recorrido: 'CABASUR2', direccion: 'Carlos Berg 3669, CABA, 5 30 hs a 10 hs  ' },
        { sucursal: 'HOSPITAL BRITANICO', recorrido: 'CABASUR3', direccion: 'PERDRIEL 74, CABA, 6 a 11 30 hs ' },
        { sucursal: 'DHL INTERNACIONAL', recorrido: 'CABASUR4', direccion: 'Larrazabal 2295, CABA, 6 a 15 hs  ' },
        { sucursal: 'VOLKSWAGEN FATIMA', recorrido: 'FATIMA 1', direccion: 'RUTA NAC. 8. 7135, FÁTIMA, 07 a 09 ' },
        { sucursal: 'JOHNSON & JOHNSON FOOD PILAR', recorrido: 'FATIMA 2', direccion: 'RUTA 8 KM 63.5 FATIMA - PILAR, FÁTIMA, 07 a 10 ' },
        { sucursal: 'SWIFT', recorrido: 'FATIMA 3', direccion: 'Arturo Frondizi calle 7 sin número, parque industrial Pilar Franja horaria de recepción de 7 a 11hs, FÁTIMA, 07 a 11hs' },
        { sucursal: 'THE WALT DISNEY COMPANY', recorrido: 'FATIMA 4', direccion: 'RUTA 8, RAMAL PILAR KM. 47,5, PILAR, 06:30 a 11hs ' },
        { sucursal: 'WHIRLPOOL FOOD', recorrido: 'FATIMA 5', direccion: 'RUTA NAC. 8. KM 64.5, FÁTIMA, 06 a 11 ' },
        { sucursal: 'BAYER PILAR II', recorrido: 'FATIMA 6', direccion: 'CALLE 3 Y DEL CANAL. PARQUE IN, PILAR, 08 a 12 ' },
        { sucursal: 'BAYER PILAR I', recorrido: 'FATIMA 7', direccion: 'CALLE 8 (E/ 5 y 6) PARQUE INDU, PILAR, 08 a 12 ' },
        { sucursal: 'FORD ARGENTINA', recorrido: 'FORDMON1', direccion: 'Av. Henry Ford y Panamericana, 6 a 12 ' },
        { sucursal: 'FORD MONTAJE SCA', recorrido: 'FORDMON2', direccion: 'AV. PTE. PERON 4640, FORD ARGENTINA + FORD MONTAJE SCA, 6 a 12 ' },
        { sucursal: 'MONDELEZ PACHECO', recorrido: 'MONDEL1', direccion: 'Av Henry Ford 1134, Gral. Pacheco, 6 a 10 ' },
        { sucursal: 'BAYER MUNRO', recorrido: 'MUNRO 1', direccion: 'RICARDO GUTIERREZ 3652, MUNRO, 06:30 a 08:30 ' },
        { sucursal: 'GIVAUDAN MUNRO', recorrido: 'MUNRO 2', direccion: 'SAN LORENZO 4759, MUNRO, 07 a 09 ' },
        { sucursal: 'P&G', recorrido: 'MUNRO 3', direccion: 'GOB. UGARTE 3561, MUNRO, 06 a 10hs ' },
        { sucursal: 'NON STOP DIGITAL', recorrido: 'MUNRO 4', direccion: 'Manuel Belzu 4053, MUNRO, 7 a 11 ' },
        { sucursal: 'PLANTA ELABORADORA VEND', recorrido: 'MUNRO 5', direccion: 'Pedro Ignacio de Rivera 6061, MUNRO, 07 a 12 ' },
        { sucursal: 'IPESA CIUDADELA', recorrido: 'OESTE1-2', direccion: 'AV. M. T. DE ALVEAR 4266/71, Ciudadela, 7 a 11 hs ' },
        { sucursal: 'PEUGEOT PALOMAR', recorrido: 'OESTE1-3', direccion: 'Fray Mamerto Esquiu 902, VILLA BOSCH, 7 a 13 hs  ' },
        { sucursal: 'CATALENT', recorrido: 'OESTE1-1', direccion: 'Av. Bernabe Marquez 691, LOMA HERMOSA, 06 a 11 ' },
        { sucursal: 'YPF GAS', recorrido: 'OESTE2-1', direccion: 'AV. CROVARA 5299, SAN JUSTO, 6 A 7 hs  ' },
        { sucursal: 'GRUPO AYUDIN', recorrido: 'OESTE2-2', direccion: 'Castro Barros 2050, ALDO BONZI, 6 A 9 hs  ' },
        { sucursal: 'NESTLE WATERS ARGENTINA', recorrido: 'OESTE3-1', direccion: 'ACCESO OESTE KM 41.700, MORENO, 6 a 9 hs  ' },
        { sucursal: 'LA ANONIMA', recorrido: 'OESTE3-2', direccion: 'INTENDENTE PEREZ QUINTANA 3850, ITUZAINGO, 7 a 11 hs ' },
        { sucursal: 'IAE UNIVERSIDAD AUSTRAL', recorrido: 'PILAR-1', direccion: 'MARIANO ACOSTA 1663, PILAR, 7 a 9 maximo 12 ' },
        { sucursal: 'SALESFORCE ARG. PILAR', recorrido: 'PILAR-2', direccion: 'Av. Sargento Mayor Beliera 3025, altura Km 59 Panamericana, pilar, pilar, 07 a 12hs ' },
        { sucursal: 'SHELL DOCK SUD', recorrido: 'SUR1-1', direccion: 'Sargento Ponce 2318 Dock Sud, DOCK SUD, 6 a 9 hs  ' },
        { sucursal: 'NEW SAN MONTE CHINGOLO', recorrido: 'SUR1-2', direccion: 'Kloosterman 2100 -, MONTE CHINGOLO, 7 a 11 hs ' },
        { sucursal: 'ROCA', recorrido: 'SUR1-3', direccion: 'Camino Gral. Belgrano 2873, LANUS, 7 a 10 hs  ' },
        { sucursal: 'PAMPÁ ENERGIA AVELLANEDA', recorrido: 'SUR1-4', direccion: 'URUGUAY 1115, AVELLANEDA, 7 a 11 hs ' },
        { sucursal: 'NEW SAN AVELLANEDA - PILISAR S.A.', recorrido: 'SUR1-5', direccion: 'Coronel Molinedo 1600, AVELLANEDA, 6 a 13 hs  ' },
        { sucursal: 'ZUCAMOR RANELAGH', recorrido: 'SUR2-1', direccion: 'Av. Antartida Argentina, RANELAGH, 6 a 10 hs ' },
        { sucursal: 'ZUCAMOR BERNAL', recorrido: 'SUR2-2', direccion: 'Con. Gral. Belgrano km 14,7, QUILMES, 6 a 10 hs ' },
        { sucursal: 'CEPAS QUILMES', recorrido: 'SUR3-1', direccion: 'parque industrial burzaco, BURZACO, 4 a 9:30 hs Respetar  ' },
        { sucursal: 'BIOGENESIS BAGO MONTEGRANDE', recorrido: 'SUR3-2', direccion: '9 de Abril 1251, MONTE GRANDE, 6 a 10 hs ' },
        { sucursal: 'ABBOTT LABORATORIES', recorrido: 'SUR4-1', direccion: 'Av. Valentín Vergara  7989, INGENIERO JUAN ALLAN, 6 a 11 hs  ' },
        { sucursal: 'BAGO LA PLATA', recorrido: 'SUR4-2', direccion: 'CALLE 4. NRO. 1429, La PLAta , 6 a 11 hs  ' },
        { sucursal: 'PAMPA ENERGIA ENSENADA BARRAGAN', recorrido: 'SUR4-3', direccion: 'AV. DOMINGO MERCANTE Y ARROYO, Ensenada, 8 30 a 13 hs  ' },
        { sucursal: 'OBLAK HERMANOS', recorrido: 'S-OESTE1', direccion: 'Ciudadela Nº 5451,, VIRREY DEL PINO, 6 a 8 hs  ' },
        { sucursal: 'COCA COLA EZEIZA ', recorrido: 'S-OESTE2', direccion: 'PUENTE DEL INCA 2450. POLO IND, EZEIZA, 6 a 11 hs  ' },
        { sucursal: 'MERCEDES BENZ ARGENTINA S.A.U.', recorrido: 'S-OESTE3', direccion: 'RUTA NAC. Nº 3. KM 43.500, VIRREY DEL PINO, 7 a 14 hs  ' },
        { sucursal: 'PAMPA ENERGIA GENELBA', recorrido: 'S-OESTE4', direccion: 'RUTA 3. KM 49,5, Marcos Paz, 7 A 15 HS  ' },
        { sucursal: 'NESTLE PACHECO', recorrido: 'TALAPAC1', direccion: 'Panamericana km 29, EL TALAR DE PACHECO, 07 a 10:30 ' },
        { sucursal: 'TPL', recorrido: 'TALAPAC2', direccion: 'Ruta 197 2999, EL TALAR DE PACHECO, 07 a 12 ' },
        { sucursal: 'PEUGEOT PACHECO', recorrido: 'TALAPAC3', direccion: 'Marcos Sastre 1014, EL TALAR DE PACHECO, 07 a 15hs ' },
        { sucursal: 'TETRA PAK', recorrido: 'TIGRE-1', direccion: 'Uruguay 2887, VICTORIA, 6 a 7 ' },
        { sucursal: 'HALEON', recorrido: 'TIGRE-2', direccion: 'CARLOS CASARES 3690, VICTORIA, 6 a 8 máximo 11hs ' },
        { sucursal: 'SAN ANDRES CAMPUS', recorrido: 'SANFERS1', direccion: 'CALLE DON MARIANO. ALTURA URUG, SAN FERNANDO, 6 a 7, 9 a 11 y 13 a 15 (DE SER NECESARIO ENTREGARLO SOLO) ' },
        { sucursal: 'LINDE FOOD', recorrido: 'TIGRE-3', direccion: 'SAAVEDRA 2251, TIGRE, 6 a 10 ' },
        { sucursal: 'MONDELEZ VICTORIA', recorrido: 'TIGRE-4', direccion: 'Uruguay 3911, VICTORIA, 6 a 12 ' },
        { sucursal: 'GESTAMP PLANTA III', recorrido: 'TORTUG1', direccion: 'Panamericana km 48,, ESCOBAR, 06:30 a 08 hasta las 10hs maximo ' },
        { sucursal: 'BIOGENESIS BAGO GARIN', recorrido: 'TORTUG2', direccion: 'Ruta Panamericana km 38,5., GARIN, 07 a 10hs ' },
        { sucursal: 'PAPELERA DEL PLATA TORTUGUITAS ', recorrido: 'TORTUG3', direccion: 'Otto Krause 4950, Tortuguitas, a confirmar ' },
        { sucursal: 'FINNING ARGENTINA SA', recorrido: 'TORTUG4', direccion: 'VENEZUELA 4021, Tortuguitas, 6 a 16 ' },
        { sucursal: 'ORBIS', recorrido: 'VADELIN1', direccion: 'YERBAL 1200, VILLA ADELINA, 06 a 10 ' },
        { sucursal: 'TEVA', recorrido: 'VADELIN2', direccion: 'Juan Jose Castelli 6701, VILLA ADELINA, 07 a 11hs ' },
        { sucursal: 'BIC ARGENTINA', recorrido: 'VADELIN3', direccion: 'Colectora Panamericana este 2121, boulogne, san isidro, BOULOGNE, 07 a 12 ' },
        { sucursal: 'GIVAUDAN MALVINAS ARGENTINAS', recorrido: 'VDMAYO2', direccion: 'COLECTORA OESTE PANAMERICANA K, MALVINAS ARGENTINAS, 7 a 10 ' },
        { sucursal: 'VOLKSWAGEN PACHECO', recorrido: 'VWPACH1', direccion: 'DELCASSE Y AV. HENRY FORD S/N, Gral. Pacheco, 06 a 09 ' },
        { sucursal: 'SAN ANDRES OLIVOS', recorrido: 'VLOPEZ1', direccion: 'NOGOYA 550., OLIVOS, 06:00 a 7:00 y de 9:00 a 11:30 ' },
        { sucursal: 'SANDOZ', recorrido: 'VLOPEZ2', direccion: 'ACASUSSO 3780, OLIVOS, 7 a 15 ' },
        { sucursal: 'PAPELERA DEL PLATA ZARATE', recorrido: 'ZARATE1', direccion: 'Camino de la Costa Brava Km. 7, ZARATE, 06 a 10 ' },
        { sucursal: 'BAYER ZARATE', recorrido: 'ZARATE2', direccion: 'CAMINO DE LA COSTA BRAVA S/N, ZARATE, 06 a 10 ' },
        { sucursal: 'PAMPA ENERGIA ZARATE', recorrido: 'ZARATE3', direccion: 'RUTA 6 (EX RUTA 12) KM 83,50, ZARATE, 7 a 15 ' },
        { sucursal: 'MONSANTO ZARATE CONTRATISTAS', recorrido: 'ZARATE4', direccion: 'RUTA 6 KM 83,1. (PROVEEDORES), ZARATE, 07 a 19hs ' },
        { sucursal: 'MONSANTO ZARATE', recorrido: 'ZARATE5', direccion: 'RUTA 6 KM 83,1. PUERTA 2 (PROV, ZARATE, 07 a 19hs ' },
        { sucursal: 'QBOX', recorrido: 'ZARATE6', direccion: 'Ruta Nac.Nro.6. KM 193,5, CAMPANA, 7 a 18 ' },
        { sucursal: 'SWIFT PONTEVEDRA', recorrido: 'S-OESTE2', direccion: 'Av. Otero 5250, Pontevedra, 07 a 12hs ' },
        { sucursal: 'VOLKSWAGEN PACHECO (KRAFT)', recorrido: 'VWPACH1', direccion: 'DELCASSE Y AV. HENRY FORD S/N, Gral. Pacheco, 06 a 09 ' },
        { sucursal: 'ELEA VDM', recorrido: 'TALAPAC4', direccion: 'AV. GRAL. LEMOS 2809, VILLA DE MAYO, 06 a 10 ' },
        { sucursal: 'bagley salto', recorrido: 'BENAVI3', direccion: 'solicitar turno, entregar en Blanca Luna Av. Gral. Juan Domingo Perón 3780, gral pacheco ' },
        { sucursal: 'BAGLEY CORDOBA', recorrido: 'BENAVI4', direccion: 'solicitar turno, entregar en Blanca Luna Av. Gral. Juan Domingo Perón 3780, gral pacheco ' },
        { sucursal: 'VOLKSWAGEN CORDOBA', recorrido: 'BENAVI5', direccion: 'solicitar turno, entregar en Blanca Luna Av. Gral. Juan Domingo Perón 3780, gral pacheco ' },
        { sucursal: 'BAGLEY TOTORAL', recorrido: 'BENAVI6', direccion: 'solicitar turno, entregar en Blanca Luna Av. Gral. Juan Domingo Perón 3780, gral pacheco ' },
        { sucursal: 'CONVERFLEX', recorrido: 'BENAVI7', direccion: 'solicitar turno, entregar en Blanca Luna Av. Gral. Juan Domingo Perón 3780, gral pacheco ' },
        { sucursal: 'RAIZEN PLANTA SOLA', recorrido: 'CABASUR5', direccion: 'Bariloche 3096-Barracas ; 8 a 14 ; Ariel Vargas 11 5162-2935 ' },
        { sucursal: 'CHEVRON PUERTO MADERO', recorrido: 'CABACEN10', direccion: 'Thompson 350-CABA ; 8 a 14 ; Edgar Zalazar 11 3947-9141 ' },
        { sucursal: 'CHEVRON SUS', recorrido: 'CABANOR1B', direccion: 'Arribeños 3345-CABA ; 8 a 14 ; Marcelo Panessi11 5706-7659 ' },
        { sucursal: 'SARA ARAHOZ', recorrido: 'CABA-R8', direccion: 'Araoz 2456 CABA  ; A PARTIR DE LAS 15 ; Belen Chapori 11 5750-9633 ' },
        { sucursal: 'SARA JUNCAL', recorrido: 'CABA-R7', direccion: 'Juncal 1080 CABA ; 8 a 14 ; Victor Tevez 11 7364 7335 ' },
        { sucursal: 'CCU CIUDADELA', recorrido: 'OESTE1-4', direccion: 'Comesaña 4071 ; 8 a 14 ; Andrea Moromizato 11 6292-0875 ' },
        { sucursal: 'CENTROS COMUNES', recorrido: 'CABACEN11', direccion: 'Echeverria 1050, Florida Oeste ; 8 a 14 ; Carolina 11 6292-0875 ' },
        { sucursal: 'KC OLIVOS', recorrido: 'MUNRO 6', direccion: 'Nicolas repetto 3848-Olivos ; 8 a 14 ; Walter  11 5955-8576 ' },
        { sucursal: 'TETRA PAK', recorrido: 'TIGRE-5', direccion: 'Uruguay 2887 Victoria ; 8 a 14 ; Vanina Lopez  11 4068-0756 ' },
        { sucursal: 'J&J', recorrido: 'FATIMA 8', direccion: 'Ruta 8 km 63,5 Pilar- Fatima ; 8 a 14 ; Diego Olivera 11 4048-5487 ' },
        { sucursal: 'WHIRLPOOL', recorrido: 'FATIMA 9', direccion: 'Ruta 8 km64.5 Fatima Pilar ; 8 a 14 ; Monica Bacigalupo 11 2851-0385 ' },
        { sucursal: 'KC PILAR', recorrido: 'FATIMA 10', direccion: 'Calle 10 559 Fatima-Pilar ; 8 a 14 ; Fabiana Vietri 11 6545-3056 ' },
        { sucursal: 'KC CLASS', recorrido: 'FATIMA 11', direccion: 'El bagual 101, Fatima-Pilar. ; 8 a 14 ; Fabiana Vietri 11 6545-3056 ' },
        { sucursal: 'CCU LUJAN', recorrido: 'LUJAN1', direccion: 'Ruta 6 y 34, Lujan ; 8 a 14 ; Emiliano 11 6287-0081 ' },
        { sucursal: 'ELEA', recorrido: 'CABA-R9', direccion: 'Humahuaca 4079, Almagro ; 8 a 14 ; Vanesa Peloso 11 2836-2086 ' }
        
  
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
                throw new Error('El archivo no tiene las columnas requeridas: sucursal, demanda de kg');
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