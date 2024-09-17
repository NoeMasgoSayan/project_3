function getPlantas() {
  // Crear un objeto para almacenar las plantas por familia
  let plantasPorFamilia = {};

  // Conseguimos el nombre de las plantas
  $.get(`https://pvz-2-api.vercel.app/api/plants/`, function (plantasData) {
    // Conseguimos información de cada planta
    let plantasInfo = [];
    let familias = new Set();  // Usamos un Set para evitar familias duplicadas

    // Primera solicitud para obtener la información de todas las plantas
    for (let planta of plantasData) {
      $.get(`https://pvz-2-api.vercel.app/api/plants/${planta}`, function (data) {
        // Guardar la planta en un array para mostrar después
        plantasInfo.push(data);
        
        // Obtener la familia de la planta
        let familia = data.Family || data.family;
        if (familia) {
          familias.add(familia);  // Añadir la familia al set
          // Si la familia no está en el objeto, crear una entrada vacía
          if (!plantasPorFamilia[familia]) {
            plantasPorFamilia[familia] = [];
          }
          // Añadir la planta a la familia correspondiente
          plantasPorFamilia[familia].push(data);
        }
        
        // Una vez que todas las plantas están cargadas, crear los botones de filtro
        if (plantasInfo.length === plantasData.length) {
          crearBotonesFiltro(Array.from(familias));
          mostrarPlantas(plantasInfo);  // Mostrar todas las plantas inicialmente
        }
      });
    }
  });
}

function crearBotonesFiltro(familias) {
  let botones = familias.map(familia => `
    <button class="filter-btn" data-family="${familia}">${familia}</button>
  `).join('');
  
  $('#filter-buttons').html(botones);

  // Añadir evento click a cada botón de filtro
  $('.filter-btn').click(function () {
    let familiaSeleccionada = $(this).data('family');
    filtrarPlantas(familiaSeleccionada);
  });
}

function filtrarPlantas(familia) {
  // Limpiar la lista actual de plantas
  $('#plant-list').empty();
  
  if (familia === 'All') {
    // Mostrar todas las plantas si se selecciona "All"
    mostrarPlantas(Object.values(plantasPorFamilia).flat());
  } else {
    // Mostrar solo las plantas de la familia seleccionada
    mostrarPlantas(plantasPorFamilia[familia] || []);
  }
}

function mostrarPlantas(plantas) {
  let html = plantas.map(data => `
    <div class="plant-info">
      <img src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
      <h2>${data.name}</h2>
      <p><strong>Costo:</strong> ${data["Sun cost"] || data["cost"]}</p>
      ${data.Recharge || data.recharge ? `<p><strong>Recarga:</strong> ${data.Recharge || data.recharge}</p>` : ``}
      ${data.damage ? `<p><strong>Daño:</strong> ${data.damage}</p>` : ``}
      ${data.Toughness ? `<p><strong>Dureza:</strong> ${data.Toughness}</p>` : ``}
      ${data.range ? `<p><strong>Rango:</strong> ${data.range}</p>` : ``}
      ${data.powerup ? `<p><strong>Powerup:</strong> ${data.powerup}</p>` : ``}
      ${data.Special ? `<p><strong>Especial:</strong> ${data.Special}</p>` : ``}
      ${data.Family || data.family ? `<p><strong>Familia:</strong> ${data.Family || data.family}</p>` : ``}
      ${data.description ? `<p class="description"><strong>Descripción:</strong> ${data.description}</p>` : ``}
    </div>
  `).join('');
  
  $('#plant-list').html(html);
}

$(document).ready(function () {
  getPlantas();
});