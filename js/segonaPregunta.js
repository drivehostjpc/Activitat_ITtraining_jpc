let ultimaPreg = 4;


function seguentPregunta(objecte){
  let numPreg, numPregSeguent, indexPreg;  
  // ID = pregunta-1
  //      0123456789
  // numPreg = parseInt.charAt(9)
  // indexPreg = numPreg - 1
  debugger;
  let objecteID = objecte.parentElement.id;
  numPreg = parseInt(objecteID.charAt(9));
  numPregSeguent = numPreg + 1;
  indexPreg = numPreg - 1;
alert("numPreg " + numPreg);
        pregunta = document.getElementById("pregunta-" + numPreg);
        pregunta.classList.remove("elementVisible");
        pregunta.classList.add("elementOcult");
        if (numPreg!=ultimaPreg){
          pregunta = document.getElementById("pregunta-" + numPregSeguent);
          pregunta.classList.remove("elementOcult");
          pregunta.classList.add("elementVisible");
        } else {
          pregunta = document.getElementById("resultat");
          pregunta.classList.add("elementVisible");
          pregunta.classList.remove("elementOcult");
        }
}  // FINAL   function passaSeguent()

function guardaInputEscollit(objecte){
  alert("objecte " + objecte);
}