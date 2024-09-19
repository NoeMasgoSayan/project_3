function getZombies(){

  // Conseguimos el nombre de los zombies
  $.get(`https://pvz-2-api.vercel.app/api/zombies`, function (zombiesData){

    //! Crear arrays
    let nameZombie = [];
    let velocidad = [];
    let dureza = [];

    console.log(nameZombie)
    
    // Conseguimos información de cada zombie
    for (let zombie of zombiesData){
      $.get(`https://pvz-2-api.vercel.app/api/zombies/${zombie}`, function (data) {

        //* Añadimos info al array
        nameZombie.push(data.name);
        velocidad.push(data.speed || 'No calculado');
        dureza.push(data.toughness || data.toughness);

        //* Guardamos nameZombie, velocidad y dureza en localStorage
        localStorage.setItem("nameZombie", JSON.stringify(nameZombie));
        localStorage.setItem("velocidad", JSON.stringify(velocidad));
        localStorage.setItem("dureza", JSON.stringify(dureza));

        const infoZombies = `
        <div class="zombies-info">
          <img src="https://pvz-2-api.vercel.app${data.image}" alt="${data.name}">
          <h2>${data.name}</h2>
          <p><strong>Dureza:</strong> ${data.toughness || data.toughness}</p>
          ${data.speed ? `<p><strong>Velocidad:</strong> ${data.speed}</p>` : ``}
          ${data.stamina ? `<p><strong>Resistencia:</strong> ${data.stamina}</p>` : ``}
          ${data.description ? `<p class="description"><strong>Descripción:</strong> ${data.description}</p>` : ``}
        </div>`;
      
        // Añadimos la información al html
        $("#zombies-list").append(infoZombies);

      });
    }
  });
}

$(document).ready(function () {
  getZombies();
});