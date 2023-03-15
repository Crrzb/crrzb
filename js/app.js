const descripciones = [
    "Website for sale of cakes and desserts in Monterrey, with image carousel, menu with interaction to create your order and finalize the order through a Whatsapp button to a chat with the preset message with the customer's order.",
    "Web application for children, with this application they can practice the multiplication tables by levels, each level is a multiplication table. They have the option to start doing a test and depending on the result start practicing that level or start from a specific level.",
    "Web application in which obtaining the user's birthday, we can calculate the total days that a person can live and calculate how many has been used and with this print the amount and a percentage of weeks that the user has lived so far. There is also the option to view it by month.",
    "In this project we simulate a survey for any service provider interested in measuring customer satisfaction. A series of questions in which with the answers we can measure from 1 the lowest to 5 the highest score.",
    "This static website contains information about environment and sustainability, information about the planet earth and how it is formed, the systems that compose it and how they all work together. An informative website."
]

const imagenes = [
    './img/logo_dulce_luna.jpg',
    './img/proyecto_tablas.png',
    './img/vida_restante.png',
    './img/encuesta_servicio.png',
    './img/ambiente_sustentabilidad.png'
]


const nombres = [
    'Dulce Luna',
    'Proyecto Tablas',
    'Vida Restante',
    'Encuesta Servicio',
    'Ambiente y sustentabilidad'
]

const urls = [
    'https://crrzb.github.io/dulce_luna',
    'https://crrzb.github.io/proyecto_tablas',
    'https://crrzb.github.io/vida_restante',
    'https://crrzb.github.io/encuesta_servicio',
    'https://crrzb.github.io/ambiente_sustentabilidad',

]

const builds = [
    'HTML5, CSS3, Javascript y Bootstrap',
    'HTML5, CSS3, Javascript y Bootstrap',
    'HTML5, CSS3, Javascript y Bootstrap',
    'HTML5, CSS3, Javascript y Bootstrap',
    'HTML5, CSS3, Javascript y Bootstrap'
] 


let total_proyectos = 5;
let position = 0;

const btn_left = document.getElementById('left_btn')
const btn_right = document.getElementById('right_btn')
const descripcion = document.getElementById('desc_proyecto')
const img = document.getElementById('img_proyecto')
const nombre = document.getElementById('nombre_proyecto')
const url = document.getElementById('link_proyecto')
const build = document.getElementById('build_proyecto')
const p_position = document.getElementById('position')

btn_left.addEventListener('click', back)
btn_right.addEventListener('click',forward)
mostar_proyecto()

function back(){
    if(position!=0){
        position--;
    }else{
        position=total_proyectos-1;
    }

    mostar_proyecto()
}

function forward(){
    if(position!=total_proyectos-1){
        position++;
    }else{
        position=0;
    }

    mostar_proyecto()
}

function mostar_proyecto(){
    nombre.innerText = nombres[position]
    img.src = imagenes[position]
    descripcion.innerText = descripciones[position]
    build.innerText = 'Built with: '+builds[position]
    url.href = urls[position]
    p_position.innerText = position+1+' - '+total_proyectos;
}