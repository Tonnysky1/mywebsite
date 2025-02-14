// Datos de ejemplo (puedes cargarlos desde localStorage o una API)
const casos = [
  { nombre: "Caso #123", cliente: "Cliente A", estatus: "Activo", fecha: "2023-10-20", foja: "10" },
  { nombre: "Caso #456", cliente: "Cliente B", estatus: "Completado", fecha: "2023-10-25", foja: "15" },
  { nombre: "Caso #789", cliente: "Cliente C", estatus: "Urgente", fecha: "2023-10-30", foja: "20" },
];

function mostrarCasos(lista) {
  const tabla = document.getElementById("cases-list");
  tabla.innerHTML = "";

  lista.forEach((caso, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${caso.nombre}</td>
      <td>${caso.cliente}</td>
      <td>${caso.estatus}</td>
      <td>${caso.fecha}</td>
      <td>${caso.foja}</td>
      <td>
        <a href="detalle_caso.html?index=${index}">Ver Detalles</a>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

// Cargar casos al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarCasos(casos);
});

// Función para filtrar casos
function filterCases() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const statusFilter = document.getElementById("status-filter").value;
  const tipoFilter = document.getElementById("tipo-caso-filter").value;
  const dateFilter = document.getElementById("date-filter").value;

  const casosFiltrados = casos.filter((caso) => {
    const matchesSearch = caso.nombre.toLowerCase().includes(searchInput) || caso.cliente.toLowerCase().includes(searchInput);
    const matchesStatus = statusFilter === "" || caso.estatus === statusFilter;
    const matchesTipo = tipoFilter === "" || caso.tipo === tipoFilter;
    const matchesDate = dateFilter === "" || caso.fecha === dateFilter;

    return matchesSearch && matchesStatus && matchesTipo && matchesDate;
  });

  mostrarCasos(casosFiltrados);
}