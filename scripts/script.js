const resultado = document.getElementById("resultado");

const obtener = document.getElementById('generar');
obtener.addEventListener("click", function (even) {
    even.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    const mensaje = `Bievenido ${nombre}! Nos alegra que estes visitando nuestra hermosa ciudad de ${ciudad}`;
    resultado.textContent = mensaje;
})


