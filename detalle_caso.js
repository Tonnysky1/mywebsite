document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const caseIndex = params.get("index");

  if (caseIndex !== null) {
    let casos = JSON.parse(localStorage.getItem("casos")) || [];
    let caso = casos[caseIndex];

    if (caso) {
      document.getElementById("case-title").innerText = caso.nombre;
      document.getElementById("case-client").innerText = caso.cliente;
      document.getElementById("case-status").innerText = caso.estatus;
      document.getElementById("case-date").innerText = caso.fecha;
      document.getElementById("case-page").innerText = caso.foja;
      
      // Cargar notas si existen
      let notasGuardadas = localStorage.getItem(`notas_${caseIndex}`) || "";
      document.getElementById("case-notes").value = notasGuardadas;
    } else {
      alert("Caso no encontrado.");
    }
  }
});

function guardarNotas() {
  const params = new URLSearchParams(window.location.search);
  const caseIndex = params.get("index");
  const notas = document.getElementById("case-notes").value;

  if (notas.trim() !== "") {
    localStorage.setItem(`notas_${caseIndex}`, notas);
    alert("Notas guardadas correctamente.");
  } else {
    alert("Las notas no pueden estar vacías.");
  }
}