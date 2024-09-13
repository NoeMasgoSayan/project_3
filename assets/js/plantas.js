function getPlantas() {
  $.get(`https://pvz-2-api.vercel.app/api/plants/`, function (plantasData) {
    for (let planta of plantasData) {
      $.get(`https://pvz-2-api.vercel.app/api/plants/${planta}`, function (data) {
        const infoPlantas = `
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
        </div>`;
        
        $("#plant-list").append(infoPlantas);
      });
    }
  });
}

$(document).ready(function () {
  getPlantas();
});