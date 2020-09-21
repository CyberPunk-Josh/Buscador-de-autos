// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

// Datos para la busqueda:
let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};
// Event Listeners:
const autos = obtenerAutos();
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event listeners para el formulario

// seleecionar la marca:
const marca = document.querySelector('#marca');
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});
// seleccionar el año: 
const year = document.querySelector('#year');
year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});
// seleccionar el minimo:
const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});
// seleccionar el maximo:
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});
// selccionar las puertas:
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});
// selccionar transmision:
const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value;
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});
// selccionar color:
const color = document.querySelector('#color');
color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;
    // llamar a la funcion de filtrar autos:
    filtrarAuto();
});

// limpiar el html:
function limpiarHTML(){
    // Leer el elemento resultado:
    const contenedor = document.querySelector('#resultado');
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

// Imprimir los autos en el HTML
function mostrarAutos(autos){
    // limpiar los resultados anteriores:
    limpiarHTML();
    // Leer el elemento resultado:
    const contenedor = document.querySelector('#resultado');
    // construir el html de los autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p> ${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} - Precio: $ ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })
};

// mostrar la ventana de No Resultado.
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No se encontraron resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

// coleccion de filtros 
function filtrarAuto() {
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
};

// filtro de marca:
function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }else{
        return auto;
    }
};
// filtro de año:
function filtrarYear(auto){
    // console.log(auto);
    // console.log(datosBusqueda.year);
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }else{
        return auto;
    }
};
// filtro del minimo:
function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }else{
        return auto;
    }
};
// filtro del maximo:
function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }else{
        return auto;
    }
};
// filtro de puertas:
function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }else{
        return auto;
    }
};
// filtro de transmision:
function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }else{
        return auto;
    }
};
// filtro de color:
function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }else{
        return auto;
    }
};
