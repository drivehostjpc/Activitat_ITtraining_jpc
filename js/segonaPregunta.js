let arrRespostes=[4];
let arrRespostesCorrectes=[4];

// arrPreguntes=[1, 2, 3, 4];
arrRespostes=["0000","0000","0000","0000"];
arrRespostesCorrectes=["1000","1100","1110","1111"];

let ultimaPreg=4;

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
// alert("numPreg " + numPreg);

if (arrRespostes[indexPreg]=="0000"){
  alert("No hi ha cap seleccionat!");
  } else { // ELSE if (arrRespostes[numPreg]==-1)
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
          mostraResultat();
        }
  }
}  // FINAL   function passaSeguent()

function guardaInputEscollit(objecte){
 /*
  * objecte.parentElement.id => pregunta-1
  *                                      ^
  *                             0123456789
  * objId   = pregunta-1
  * numPreg = 1
  */
 debugger;
 let objId, numPreg, indexNumPreg;
 objId = objecte.parentElement.id 
 numPreg = parseInt(objId.charAt(9));
 indexNumPreg = numPreg - 1;

 let colInputs = objecte.children;
 let escollits="";
 for (let index = 0; index < colInputs.length; index++) {
    if (colInputs[index].firstElementChild.checked){
      // <label class="opcio"> => checked
      colInputs[index].classList.add("checked");
      escollits = escollits + "1";
    } else {
      colInputs[index].classList.remove("checked");
      escollits = escollits + "0";
    }
  }
  arrRespostes[indexNumPreg]=escollits;
  console.log("escollits = " + escollits);
}

function mostraResultat() {
  resultat = document.getElementById("resultat");
  notaFinal = document.getElementById("notaFinal");
  resultat.classList.remove("elementOcult");
  resultat.classList.add("elementVisible");
  debugger;
/*
 * arrRespostes=[-1, -1, -1, -1];
 * arrRespostesCorrectes=[1, 2, 3, 4];
 */
  // let textResultat = document.getElementById("textResultat");
  let puntuacioTotal = 0;
  let textResultat = "";
  for (let index = 0; index < arrRespostesCorrectes.length; index++) {
    textResultat =  textResultat + "<h1>Pregunta #" + (index + 1) + "</h1>" +
        "la correcta és " + arrRespostesCorrectes[index] + " i has respost " +
                    arrRespostes[index] + "<br>";
    if (arrRespostesCorrectes[index]==arrRespostes[index]){
      textResultat =  textResultat + "<span class=\"unPunt\">Has obtingut 1 punt!<br></span>"
      puntuacioTotal ++;
    } else {
      textResultat =  textResultat + "<span class=\"capPunt\">NO has obtingut cap punt!<br></span>"
    }
    
  }
  document.getElementById("textResultat").innerHTML = textResultat;
  notaFinal.innerHTML = "Nota final = " + puntuacioTotal;
}