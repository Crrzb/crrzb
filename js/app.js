function visit_link(id){

    const col1 = document.querySelector("#col_about");
    const col2 = document.querySelector("#col_projects");
    const col3 = document.querySelector("#col_contact");

    const a_about = document.querySelector("#a_about");
    const a_projects = document.querySelector("#a_projects");
    const a_contact = document.querySelector("#a_contact");

    const body_color = document.body.style.backgroundColor;
    const h1_color = "#f8f9fa"; //text-light
    col1.style.backgroundColor = body_color;
    col2.style.backgroundColor = body_color;
    col3.style.backgroundColor = body_color;
    a_about.classList.remove("text-dark");
    a_projects.classList.remove("text-dark");
    a_contact.classList.remove("text-dark");

    a_about.classList.add("text-light");
    a_projects.classList.add("text-light");
    a_contact.classList.add("text-light");
    




    const col = document.querySelector("#"+id);
    col.style.backgroundColor = h1_color;
    window.location.href  = col.firstElementChild;
    col.getElementsByTagName("a")[0].classList.add("text-dark");
    
}

let looper
let deg = 0;
function rotate_logo(e,speed){
    const elemento = document.getElementById(e);
    elemento.style.transform = "rotate("+deg+")";
    looper = setTimeout('rotate_logo('+e+','+speed+')',speed);
    deg++;
    if(deg>359){
        deg=1;
    }
}

rotate_logo("logo",20);