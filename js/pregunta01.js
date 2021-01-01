// let arrPreguntes=[];
let arrRespostes=[4];
let arrRespostesCorrectes=[4];

// arrPreguntes=[1, 2, 3, 4];
arrRespostes=[-1, -1, -1, -1];
arrRespostesCorrectes=[0, 1, 2, 3];

let ultimaPreg=4;

function pasaSeguent(objecte){
  /*
  * objecte.parentElement.id => pregunta-1
  *                                      ^
  *                             0123456789
  * objId   = pregunta-1
  * numPreg = 1
  */

   let pregunta, objId, numPreg, indexNumPreg, numPregSeguent;

   objId = objecte.parentElement.id;
   numPreg = parseInt(objId.charAt(9));
   indexNumPreg = numPreg - 1;
   numPregSeguent = numPreg + 1;

  if (arrRespostes[indexNumPreg]==-1){
  alert("No hi ha cap seleccionat!");
  } else { // ELSE if (arrRespostes[numPreg]==-1)
    console.log("numPreg = " + numPreg);
    // alert("numPreg = " + numPreg);
    pregunta = document.getElementById("pregunta-" + numPreg);
    pregunta.classList.remove("elementVisible");
    pregunta.classList.add("elementOcult");
    if (numPreg != ultimaPreg){
      pregunta = document.getElementById("pregunta-" + numPregSeguent);
      pregunta.classList.remove("elementOcult");
      pregunta.classList.add("elementVisible");
    }else{
      mostraResultat();
    }   // FINAL if (numPreg == ultimaPreg)
  }   // FINAL if (arrRespostes[numPreg]==-1)
}

function guardaInputEscollit(objecte){
  debugger;
  /*
  * objecte.parentElement.id => pregunta-1
  *                                      ^
  *                             0123456789
  * objId   = pregunta-1
  * numPreg = 1
  */
  let objId, numPreg, indexNumPreg;
  objId = objecte.parentElement.id 
  numPreg = parseInt(objId.charAt(9));
  indexNumPreg = numPreg - 1;

  let colInputs = objecte.children;
  let escollit;
  for (let index = 0; index < colInputs.length; index++) {
    if (colInputs[index].firstElementChild.checked){
      // <label class="opcio"> => checked
      colInputs[index].classList.add("checked");
      escollit = index;
    } else {
      colInputs[index].classList.remove("checked");
    };
  }

  arrRespostes[indexNumPreg] = escollit;

  console.log("numPreg = " + numPreg);
  console.log("indexNumPreg = " + indexNumPreg);
  console.log("arrRespostes[indexNumPreg] = " + arrRespostes[indexNumPreg]);
  console.log("arrRespostesCorrectes[indexNumPreg] = " + arrRespostesCorrectes[indexNumPreg]);
  console.log("arrRespostes = " + arrRespostes);
  console.log("arrRespostesCorrectes = " + arrRespostesCorrectes);
  // alert("arrRespostes[numPreg] = " + arrRespostes[numPreg]);
  
} // FINAL function inputEscollit(objecte)

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