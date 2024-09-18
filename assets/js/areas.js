function getAreas (){

  // Conseguimos el nombre de las áreas
  $.get(`https://pvz-2-api.vercel.app/api/areas/`, function (areasData){

    //! Crear arrays
    let nameArea = [];
    
    // Conseguimos información de cada área
    for (let area of areasData) {
      $.get(`https://pvz-2-api.vercel.app/api/areas/${area}`, function (data){
        return null;
      }).fail(function(err) {
        const data = err.responseJSON;

        //* Añadimos info al array
        nameArea.push(data.name);

        //* Guardamos en localStorage
        localStorage.setItem("nameArea", JSON.stringify(nameArea));

        const infoAreas = `
        <div class="areas-info">
          <img src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
          <h2>${data.name}</h2>
          <p><strong>Niveles:</strong> ${data.levels || data.levels}</p>
          ${data.difficulty ? `<p><strong>Dificultad:</strong> ${data.difficulty}</p>` : ""}
        </div>`;
              
        $("#areas-list").append(infoAreas);
      });
    }
  });
}

$(document).ready(function () {
  getAreas ();
  
});