function getAreas() {
  $.get(`https://pvz-2-api.vercel.app/api/areas/`, function (areasData) {
    for (let area of areasData) {
      $.get(`https://pvz-2-api.vercel.app/api/areas/${area}`, function (data) {
        const infoAreas = `
        <div class="areas-info">
        <h2>${data.name}</h2>
        <p><strong>Nivel:</strong> ${data.levels}</p>
        <p><strong>Dificultad:</strong> ${data.difficulty}</p>
        </div>`
        $("#areas-list").append(infoAreas);
      });
    }
  });
}

$(document).ready(function () {
  getAreas();
});