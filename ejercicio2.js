
const mas = document.getElementById('botonMAS');
const menos = document.getElementById('botonMENOS');
const multi = document.getElementById('botonMULTI');
const dividir = document.getElementById('botonDIVIDIR');
const resultado = document.getElementById('resultado');
const nro1 = document.getElementById('texto1');
const nro2 = document.getElementById('texto2');

function obtenerValores() {
    const valor1 = parseInt(nro1.value);
    const valor2 = parseInt(nro2.value);
    return [valor1, valor2];
}

mas.addEventListener('click', () => {
    const [nro1, nro2] = obtenerValores();
    resultado.value = nro1 + nro2;
});

menos.addEventListener('click', () => {
    const [nro1, nro2] = obtenerValores();
    resultado.value = nro1 - nro2;
});

multi.addEventListener('click', () => {
    const [nro1, nro2] = obtenerValores();
    resultado.value = nro1 * nro2;
});

dividir.addEventListener('click', () => {
    const [nro1, nro2] = obtenerValores();
    resultado.value = nro1 / nro2
});


