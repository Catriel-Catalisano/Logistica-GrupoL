// Base de datos de peso por artículo (Cod. Artículo: Peso en kg)
const articleWeights = {
    '59526E+11': 1.0, // Peso en kg del artículo con este código
    '7791813420583': 0.5,
    '7791813421528': 1.5,
    '7791813420521': 0.5,
    '7791813777038': 0.5,
    '7790070012050': 0.9
};

document.getElementById('processButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Por favor, seleccione un archivo CSV.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const csvData = event.target.result;
        processCSV(csvData);
    };
    reader.readAsText(file);
});

function processCSV(csvData) {
    const lines = csvData.split('\n').filter(line => line.trim() !== '');
    let header = lines[0].split(/[,;|\t]/).map(col => col.trim()); // Soporte para múltiples delimitadores
    const data = lines.slice(1).map(line => line.split(/[,;|\t]/).map(col => col.trim()));

    console.log('Encabezados detectados:', header);

    // Mapear columnas exactas basadas en el archivo
    const recorridoIndex = header.indexOf('Flete');
    const codigoArticuloIndex = header.indexOf('Cod. Artículo');
    const cantidadIndex = header.indexOf('Cantidad');

    if (recorridoIndex === -1 || codigoArticuloIndex === -1 || cantidadIndex === -1) {
        alert(`El archivo CSV no contiene las columnas necesarias.\n\nEncabezados detectados: ${header.join(', ')}`);
        return;
    }

    const recorridoWeights = {};

    data.forEach((row, index) => {
        if (row.length !== header.length) {
            console.warn(`Fila ${index + 1} mal formateada:`, row);
            return;
        }

        const recorrido = row[recorridoIndex] || '';
        const codigoArticulo = row[codigoArticuloIndex]?.replace(/["']/g, '') || '';
        const cantidad = parseFloat(row[cantidadIndex]?.replace(/["']/g, '')) || 0;

        console.log(`Procesando fila ${index + 1}:`, { recorrido, codigoArticulo, cantidad });

        const pesoArticulo = articleWeights[codigoArticulo] || 0; // Peso del artículo
        const pesoTotal = pesoArticulo * cantidad;

        if (!recorridoWeights[recorrido]) {
            recorridoWeights[recorrido] = 0;
        }

        recorridoWeights[recorrido] += pesoTotal;
    });

    displayResults(recorridoWeights);
}

function displayResults(recorridoWeights) {
    const tbody = document.getElementById('resultTable').querySelector('tbody');
    tbody.innerHTML = '';

    Object.entries(recorridoWeights).forEach(([recorrido, pesoTotal]) => {
        const row = document.createElement('tr');

        const recorridoCell = document.createElement('td');
        recorridoCell.textContent = recorrido;

        const pesoCell = document.createElement('td');
        pesoCell.textContent = pesoTotal.toFixed(2);

        row.appendChild(recorridoCell);
        row.appendChild(pesoCell);

        tbody.appendChild(row);
    });
}
