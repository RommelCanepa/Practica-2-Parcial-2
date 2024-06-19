const nombres = ["Carlos Hernandez", "Maria Perez", "Juan Medina", "Rommel Canepa", "Luis Ek", "Laura Hau", "Pedro Ku", "Sofia Chi", "Miguel Flores", "Armando Aguilar", "Joel Carrillo", "Raul Casanova", "Kevin Montero", "Manuel Ix",];

function generarNombre() {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreAleatorio = nombres[indiceAleatorio];
    document.getElementById("nombre").textContent = nombreAleatorio;
}
