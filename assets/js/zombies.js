function getZombies() {
  $.get(`https://pvz-2-api.vercel.app/api/zombies/`, function (zombiesData) {
    for (let zombie of zombiesData) {
      $.get(`https://pvz-2-api.vercel.app/api/zombies/${zombie}`, function (data) {
        const infoZombies = `
        <div class="zombies-info">
        <h2>${data.name}</h2>
        ${data.toughness ? `<p><strong>Dureza:</strong>${data.toughness}</p>` : ``}
        ${data.speed ? `<p><strong>Velocidad:</strong>${data.speed}</p>` : ``}
        ${data.stamina ? `<p><strong>Resistencia:</strong>${data.stamina}</p>` : ``}
        ${data.description ? `<p><strong>Descripción:</strong>${data.description}</p>` : ``}
        </div>`
        $("#zombies-list").append(infoZombies);
      });
    }
  });
}

$(document).ready(function () {
  getZombies();
});