let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', () => {
   let ciudad = input.value;
   cargarCiudad(ciudad);
   input.value = '';
});

function cargarCiudad (ciudad) {
   $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", 
   function (data) {
      
      document.querySelector('.container').style.visibility = 'visible';
      document.querySelector('#ciudad').textContent = data.name;
      document.querySelector('#temperatura').innerHTML = Math.round(data.main.temp) + '<sup>°C</sup>'; 
      document.querySelector('#wicon').src = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      document.querySelector('#descripcion').textContent = data.weather[0].description;
   });
}