let glUltimaPreg, glViRadio, glViCheckBox;
let glArrRespostes, glArrRespostesCorrectes;

glUltimaPreg = 4;
glViRadio = -1;
glViCheckBox = "0000";

glArrRespostes = [glUltimaPreg];
glArrRespostesCorrectes = [glUltimaPreg];

/**
 * pregunta-1 radio
 * pregunta-2 checkbox
 * pregunta-3 checkbox
 * pregunta-4 radio
 */

// checkbox
// arrPreguntes=[1, 2, 3, 4];
// glArrRespostes=["0000","0000","0000","0000"];
// glArrRespostesCorrectes=["1000","1100","1110","1111"];

// radio
// arrPreguntes=[1, 2, 3, 4];
// glArrRespostes=[-1, -1, -1, -1];
// glArrRespostesCorrectes=[0, 1, 2, 3];


glArrRespostes=[glViRadio,glViCheckBox,glViCheckBox,glViRadio];
glArrRespostesCorrectes=[0,"0100","0010",3];


function guardaInputEscollit(objecte){
  // debugger;
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
 let escollits="";

 let tipusElement;
 tipusElement = objecte.children[0].children[0].type;

 console.log("objId = " + objId);
 console.log("numPreg = " + numPreg);
 console.log("indexNumPreg = " + indexNumPreg);
 console.log("tipusElement = " + tipusElement);
 console.log("tipusElement == radio  =>  " + (tipusElement=="radio") );
 console.log("tipusElement == checkbox  =>  " + (tipusElement=="checkbox") );

 for (let index = 0; index < colInputs.length; index++) {
   if (colInputs[index].firstElementChild.checked){
     colInputs[index].classList.add("checked");
     if (tipusElement=="radio") {
       escollit = index;
     } else { // ELSE --> if (tipusElement=="radio")
       if (tipusElement=="checkbox") {
         escollits = escollits + "1";
       }  // FINAL --> if (tipusElement=="checkbox")
     }  // FINAL --> if (tipusElement=="radio")
   } else {  // ELSE --> if (colInputs[index].firstElementChild.checked){
     colInputs[index].classList.remove("checked");
     if (tipusElement=="checkbox") {
       escollits = escollits + "0";
     }  // FINAL --> if (tipusElement=="checkbox")
   } // FINAL --> if (colInputs[index].firstElementChild.checked){
 }

 if (tipusElement=="radio") {
   glArrRespostes[indexNumPreg] = escollit;
 } else {
   if (tipusElement=="checkbox") {
     glArrRespostes[indexNumPreg]=escollits;
   }
 }

 console.log("numPreg = " + numPreg);
 console.log("indexNumPreg = " + indexNumPreg);
 console.log("glArrRespostes[indexNumPreg] = " + glArrRespostes[indexNumPreg]);
 console.log("glArrRespostesCorrectes[indexNumPreg] = " + glArrRespostesCorrectes[indexNumPreg]);
 console.log("glArrRespostes = " + glArrRespostes);
 console.log("glArrRespostesCorrectes = " + glArrRespostesCorrectes);
 
} // FINAL function inputEscollit(objecte)


function seguentPregunta(objecte){
  // ID = pregunta-1
  //      0123456789
  // numPreg = parseInt.charAt(9)
  // indexPreg = numPreg - 1
  // debugger;
  let numPreg, numPregSeguent, indexPreg, objecteID, tipusElement, valorInicial;  
  objecteID = objecte.parentElement.id;
  numPreg = parseInt(objecteID.charAt(9));
  numPregSeguent = numPreg + 1;
  indexPreg = numPreg - 1;
  tipusElement = objecte.parentElement.children[2].children[0].children[0].type;

  if (tipusElement=="radio") {
    valorInicial = glViRadio;
  } else {  // ELSE --> if (tipusElement=="radio")
    if (tipusElement=="checkbox") {
      valorInicial = glViCheckBox;
    }   // ELSE --> if (tipusElement=="checkbox")
  }   // FINAL --> if (tipusElement=="radio")
  if (glArrRespostes[indexPreg]==tipusElement){
    alert("No hi ha cap seleccionat!");
  } else { // ELSE if (glArrRespostes[numPreg]==tipusElement)
    pregunta = document.getElementById("pregunta-" + numPreg);
    pregunta.classList.remove("elementVisible");
    pregunta.classList.add("elementOcult");
    if (numPreg!=glUltimaPreg) {
      pregunta = document.getElementById("pregunta-" + numPregSeguent);
      pregunta.classList.remove("elementOcult");
      pregunta.classList.add("elementVisible");
    } else {  // ELSE --> if (numPreg!=glUltimaPreg)
      pregunta = document.getElementById("resultat");
      pregunta.classList.add("elementVisible");
      pregunta.classList.remove("elementOcult");
      mostraResultat();
    } // FINAL --> if (numPreg!=glUltimaPreg) 
  } // FINAL --> if (glArrRespostes[numPreg]==tipusElement)
}  // FINAL --> function passaSeguent()

function mostraResultat() {
  resultat = document.getElementById("resultat");
  notaFinal = document.getElementById("notaFinal");
  resultat.classList.remove("elementOcult");
  resultat.classList.add("elementVisible");
  // debugger;
/*
 * glArrRespostes=[-1, -1, -1, -1];
 * glArrRespostesCorrectes=[1, 2, 3, 4];
 */
  // let textResultat = document.getElementById("textResultat");
  let puntuacioTotal = 0;
  let textResultat = "";
  for (let index = 0; index < glArrRespostesCorrectes.length; index++) {
    textResultat =  textResultat + "<h1>Pregunta #" + (index + 1) + "</h1>" +
        "la correcta és " + glArrRespostesCorrectes[index] + " i has respost " +
                    glArrRespostes[index] + "<br>";
    if (glArrRespostesCorrectes[index]==glArrRespostes[index]){
      textResultat =  textResultat + "<span class=\"unPunt\">Has obtingut 1 punt!<br></span>"
      puntuacioTotal ++;
    } else {
      textResultat =  textResultat + "<span class=\"capPunt\">NO has obtingut cap punt!<br></span>"
    }
    
  }
  document.getElementById("textResultat").innerHTML = textResultat;
  notaFinal.innerHTML = "Nota final = " + puntuacioTotal;
}