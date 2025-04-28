
const MenuBoton = document.getElementById('botonMenu');
const menu = document.getElementById('menu');
const newOptionInput = document.getElementById('texto');





function agregarOpcion() {
    const opcionTexto = newOptionInput.value.trim();
    if (opcionTexto !== "") {
        const nuevaOpcion = document.createElement('li');
        nuevaOpcion.textContent = opcionTexto;
        menu.appendChild(nuevaOpcion);
        newOptionInput.value = ""; 
    } 
}
