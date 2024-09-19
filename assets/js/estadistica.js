/*let nameArea = JSON.parse(localStorage.getItem('nameArea'));
let nombrePlanta = JSON.parse(localStorage.getItem('nombre'));
let nameZombie = JSON.parse(localStorage.getItem('nameZombie'));

//TODO: script para mostrar el gráfico

const ctxName = document.getElementById('myChartName')

const myChartName = new Chart(ctxName, {
  type: 'pie',
  data: {
    labels: [
      'Áreas',
      'Plantas',
      'Zombies'
    ],
    datasets: [{
      label: 'Cantidad de Áreas, Plantas y Zombies',
      data: [nameArea.length, nombrePlanta.length, nameZombie.length],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
})

//! PLANTAS
let familia = JSON.parse(localStorage.getItem('familia'));
let dureza = JSON.parse(localStorage.getItem('dureza'));

// Eliminar los espacios en balnco de cada string
const newFamily = familia.map(name => {
  return typeof name === 'string' ? name.trim() : name;
});

//* Contar cuantas veces se repite el nombre
const contarFamily = {};

//* Contar cada nombre
newFamily.forEach(name => {
    if (contarFamily[name]) {
        contarFamily[name]++;
    } else {
        contarFamily[name] = 1;
    }
});

// Obtener los nombres únicos
const uniqueNames = Object.keys(contarFamily);
// Obtener el número de repeticiones de cada uno
const repetitions = Object.values(contarFamily);

//TODO: script para mostrar el gráfico de familias de 

const ctx = document.getElementById('myChart')

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: uniqueNames,
    datasets: [{
    label: 'Cuantas plantas pertenecen a la misma familia',
    data: repetitions,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
    }]
  }
})

//! ZOMBIES

let velocidad = JSON.parse(localStorage.getItem('velocidad'));
let durezaZ = JSON.parse(localStorage.getItem('dureza'));

//* Contar cuantas veces se repite el nombre
const contarVelocidad = {};
const contarDurezaZ = {};

//* Contar cada nombre
velocidad.forEach(name => {
    if (contarVelocidad[name.toUpperCase()]) {
      contarVelocidad[name.toUpperCase()]++;
    } else {
      contarVelocidad[name.toUpperCase()] = 1;
    }
});

durezaZ.forEach(name => {
  if (contarDurezaZ[name]) {
    contarDurezaZ[name]++;
  } else {
    contarDurezaZ[name] = 1;
  }
});

//* Obtener los nombres únicos
const uniqueV = Object.keys(contarVelocidad);
const uniqueD = Object.keys(contarDurezaZ);
//* Obtener el número de repeticiones de cada uno
const repeticionV = Object.values(contarVelocidad);
const repeticionD = Object.values(contarDurezaZ);

//TODO: Gráfica de velocidad de zombies
const ctxZV = document.getElementById('myChartZV')

const zombieVelo = new Chart(ctxZV, {
  //* Gráfico de barras
  type: "bar",
  data:{
    labels: uniqueV,
    datasets:[
      {
        label:"Mi Gráfica",
        data: repeticionV,
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1.5
      }
    ]
  }
});

//TODO: Gráfica de dureza de zombies
const ctxZD = document.getElementById('myChartZD')

const zombieDure = new Chart(ctxZD, {
  //* Gráfico de barras
  type: "bar",
  data:{
    labels: uniqueD,
    datasets:[
      {
        label:"Mi Gráfica",
        data: repeticionD,
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1.5
      }
    ]
  }
});*/

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('myChart').getContext('2d');
  const areas = ['Player´s House', 'Ancient Egypt-Wild West-Pirate Seas-Far Future', 'Big Wave Beach-Lost City-Jurassic Marsh', 'Dark Ages', 'Modern Day', 'Frostbite Caves'];
  const niveles = [5, 25, 32, 20, 34, 30];

  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: areas,
          datasets: [{
              label: 'Niveles',
              data: niveles,
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(225, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ]
              
              
          }]
      }
      
      
  });
});