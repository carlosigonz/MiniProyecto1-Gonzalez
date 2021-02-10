//Codigo para el carousel
let liEls = document.querySelectorAll('ul li');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), liEls.length-1);
  liEls[index].scrollIntoView({behavior: 'smooth'});
}

//Codigo verificacion form

var contactName = document.getElementById("contac-name");
var contactEmail = document.getElementById("contact-email");
var contactMsj = document.getElementById("contact-msj");
var contactBtn = document.getElementById("contact-btn");

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMsj);  
});

// contactBtn.addEventListener('click',() =>{
//     alert('Mensaje Enviado');
// });

//skills

var documentoSkills = document.getElementById("skills")

var habilidades = {
    "HTML":6/10,
    "Java":8/10,
    "Python":8/10,
    "Angular":2/10
}

for (i in habilidades){
    var skillGroup = document.createElement('div');
    skillGroup.setAttribute('class','skill-group');
    var titulo = document.createElement('h3');
    titulo.setAttribute("class","skill-title")
    var porcentaje = document.createElement("p");
    porcentaje.setAttribute("class","skill-number");

    porcentaje.innerHTML = habilidades[i];
    titulo.innerHTML=i

    skillGroup.append(porcentaje);
    skillGroup.append(titulo);  

    documentoSkills.append(skillGroup);
}
