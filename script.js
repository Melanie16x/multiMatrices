let matriz1 = [];
let matriz2 = [];

function validarYGenerarMatrices() {
    let filasMatriz1 = parseInt(document.getElementById('filasMatriz1').value);
    let columnasMatriz1 = parseInt(document.getElementById('columnasMatriz1').value);
    let filasMatriz2 = parseInt(document.getElementById('filasMatriz2').value);
    let columnasMatriz2 = parseInt(document.getElementById('columnasMatriz2').value);

    // Validar que los valores sean numéricos y no estén vacíos
    if (isNaN(filasMatriz1) || isNaN(columnasMatriz1) || isNaN(filasMatriz2) || isNaN(columnasMatriz2)) {
        alert('Por favor ingresa valores numéricos para las filas y columnas de ambas matrices.');
        return;
    }

    // Mostrar las matrices en la página
    mostrarMatrices(filasMatriz1, columnasMatriz1, filasMatriz2, columnasMatriz2);
}

function mostrarMatrices(filasMatriz1, columnasMatriz1, filasMatriz2, columnasMatriz2) {
    let matricesContainer = document.getElementById('matricesContainer');
    matricesContainer.innerHTML = '';

    let matriz1HTML = '<h2>Matriz 1:</h2><table>';
    for (let i = 0; i < filasMatriz1; i++) {
        matriz1HTML += '<tr>';
        for (let j = 0; j < columnasMatriz1; j++) {
            matriz1HTML += '<td><input type="number" id="matriz1-' + i + '-' + j + '"></td>';
        }
        matriz1HTML += '</tr>';
    }
    matriz1HTML += '</table>';

    let matriz2HTML = '<h2>Matriz 2:</h2><table>';
    for (let i = 0; i < filasMatriz2; i++) {
        matriz2HTML += '<tr>';
        for (let j = 0; j < columnasMatriz2; j++) {
            matriz2HTML += '<td><input type="number" id="matriz2-' + i + '-' + j + '"></td>';
        }
        matriz2HTML += '</tr>';
    }
    matriz2HTML += '</table>';

    matricesContainer.innerHTML = matriz1HTML + '<br>' + matriz2HTML;
}

function obtenerValoresMatrices() {
    let filasMatriz1 = parseInt(document.getElementById('filasMatriz1').value);
    let columnasMatriz1 = parseInt(document.getElementById('columnasMatriz1').value);
    let filasMatriz2 = parseInt(document.getElementById('filasMatriz2').value);
    let columnasMatriz2 = parseInt(document.getElementById('columnasMatriz2').value);

    matriz1 = [];
    matriz2 = [];

    // Obtener valores de la primera matriz
    for (let i = 0; i < filasMatriz1; i++) {
        matriz1[i] = [];
        for (let j = 0; j < columnasMatriz1; j++) {
            let valor = parseInt(document.getElementById('matriz1-' + i + '-' + j).value);
            matriz1[i][j] = valor;
        }
    }

    // Obtener valores de la segunda matriz
    for (let i = 0; i < filasMatriz2; i++) {
        matriz2[i] = [];
        for (let j = 0; j < columnasMatriz2; j++) {
            let valor = parseInt(document.getElementById('matriz2-' + i + '-' + j).value);
            matriz2[i][j] = valor;
        }
    }
}

function multiplicarMatrices() {
    obtenerValoresMatrices();

    let filasMatriz1 = matriz1.length;
    let columnasMatriz1 = matriz1[0].length;
    let filasMatriz2 = matriz2.length;
    let columnasMatriz2 = matriz2[0].length;

    if (columnasMatriz1 !== filasMatriz2) {
        console.error('El número de columnas de la Matriz 1 debe ser igual al número de filas de la Matriz 2.');
        return;
    }

    let resultadoMultiplicacion = [];
    // Inicializar la matriz resultado con ceros
    for (let i = 0; i < filasMatriz1; i++) {
        resultadoMultiplicacion[i] = [];
        for (let j = 0; j < columnasMatriz2; j++) {
            resultadoMultiplicacion[i][j] = 0;
            // Realizar la multiplicación de matrices
            for (let k = 0; k < columnasMatriz1; k++) {
                resultadoMultiplicacion[i][j] += matriz1[i][k] * matriz2[k][j];
            }
        }
    }

    // Mostrar el resultado de la multiplicación
    mostrarMatrizResultado(resultadoMultiplicacion);
}

function mostrarMatrizResultado(matrizResultado) {
    let resultadoMultiplicacionDiv = document.getElementById('resultadoMultiplicacion');
    resultadoMultiplicacionDiv.innerHTML = '';

    let resultadoHTML = '<h2>Matriz Resultado:</h2><table>';
    for (let i = 0; i < matrizResultado.length; i++) {
        resultadoHTML += '<tr>';
        for (let j = 0; j < matrizResultado[i].length; j++) {
            resultadoHTML += '<td>' + matrizResultado[i][j] + '</td>';
        }
        resultadoHTML += '</tr>';
    }
    resultadoHTML += '</table>';

    resultadoMultiplicacionDiv.innerHTML = resultadoHTML;
}