let api_key = 'f3d81d0394ad5201d8d15071f79169c9';
let difKelvin = 273.15;

let btnBuscar = document.querySelector('#botonBusqueda');
btnBuscar.addEventListener('click', () => {
    let ciudad = document.querySelector('#ciudadEntrada').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`;

    fetch(url)
        .then(datoRecibido => datoRecibido.json())
        .then(datoRecibido => {

            let divDatosClima = document.querySelector('#datosClima');
            divDatosClima.innerHTML ='';

            let ciudadNombre = document.createElement('h2');
            ciudadNombre.textContent = datoRecibido.name;
            
            let tempTotal = Math.floor(datoRecibido.main.temp - difKelvin);
            let ciudadTemperatura = document.createElement('h3');
            ciudadTemperatura.textContent = tempTotal + '°C';

            let icono = document.createElement('img');
            icono.src = `https://openweathermap.org/img/wn/${datoRecibido.weather[0].icon}@2x.png`;

            let ciudadDescripcion = document.createElement('p');
            ciudadDescripcion.textContent = datoRecibido.weather[0].description;

            divDatosClima.appendChild(ciudadNombre);
            divDatosClima.appendChild(ciudadTemperatura);
            divDatosClima.appendChild(icono);
            divDatosClima.appendChild(ciudadDescripcion);

        })
        .catch(err => console.log(err))
})
