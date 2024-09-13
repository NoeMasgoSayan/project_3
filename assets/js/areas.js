function getAreas (){
  $.get(`https://pvz-2-api.vercel.app/api/areas/`, function (areasData){
      for (let area of areasData) {
          $.get(`https://pvz-2-api.vercel.app/api/areas/${area}`, function (data){
              return null;
              // const infoAreas = `
              // <div class="areas-info">
              //     <img src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
              //     <h2>${data.name}</h2>
              //     <p><strong>Niveles:</strong> ${data.levels || data.levels}</p>
              //     ${data.difficulty ? `<p><strong>Dificultad:</strong> ${data.difficulty}</p>` : ""}
              // </div>`;
              
              // $("#areas-list").append(infoAreas);
          }).fail(function(err) {
              // console.log(err)
              // console.error(JSON.stringify(err));
              const data = err.responseJSON;
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