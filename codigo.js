
// Obtén el elemento tbody de la tabla
const tbody = document.getElementById("cuerpoTabla");

fetch("/json/datos.json")
  .then((response) => response.json())
  .then((data) => {
    tbody.innerHTML = "";
    // Itera sobre los datos y crea filas para la tabla
    data.forEach((item) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `<td>${item.droguerias}</td><td>${item.mes}</td><td>${item.venta}</td>`;
      tbody.appendChild(fila);
    });
  });
