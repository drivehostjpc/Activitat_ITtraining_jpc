let glUltimaPreg, glViRadio, glViCheckBox;
let glArrRespostes, glArrRespostesCorrectes;

glUltimaPreg = 4;
glViRadio = -1;
glViCheckBox = "0000";
glViText = "buit";

glArrRespostes = [glUltimaPreg];
glArrRespostesCorrectes = [glUltimaPreg];

/**
 * pregunta-1 text
 * pregunta-2 checkbox
 * pregunta-3 radio
 * pregunta-4 checkbox
 */

glArrRespostes=[glViText,glViCheckBox,glViRadio,glViCheckBox];
glArrRespostesCorrectes=["resp1","0100",2,"0001"];


function guardaInputEscollit(objecte){

  /*
  * objecte.parentElement.id => pregunta-1
  *                                      ^
  *                             0123456789
  * objId   = pregunta-1
  * numPreg = 1
  */

  let objId, numPreg, indexNumPreg;
  let colInputs, escollit, escollits, repostaText;
  let seccio, tipusElement;

  objId = objecte.parentElement.id 
  numPreg = parseInt(objId.charAt(9));
  indexNumPreg = numPreg - 1;

  colInputs = objecte.children;
  escollit;
  escollits="";
  repostaText="";

  seccio = document.getElementById("pregunta-" + numPreg);
  opcio = seccio.children[2].children[0].children[0];

  for (let index = 0; index < colInputs.length; index++) {
   if (colInputs[index].firstElementChild.checked){
     colInputs[index].classList.add("checked");
     switch  (opcio.type) {
       case "radio":
        escollit = index;
       break;

       case "checkbox":
        escollits = escollits + "1";
       break;
      } // FINAL switch  (opcio.type)
   } else {  // ELSE --> if (colInputs[index].firstElementChild.checked){
     colInputs[index].classList.remove("checked");
     switch  (opcio.type) {
      case "checkbox":
        escollits = escollits + "0";
       break;

       case "text":
        repostaText = document.getElementById("resp-0" + numPreg).value;
       break;
     }  // FINAL --> if (opcio.type=="checkbox")
   } // FINAL --> if (colInputs[index].firstElementChild.checked){
  }

//  if (opcio.type=="radio") {
//    glArrRespostes[indexNumPreg] = escollit;
//  } else {
//    if (opcio.type=="checkbox") {
//      glArrRespostes[indexNumPreg]=escollits;
//    }
//  }

  switch  (opcio.type) {
    case "radio":
      glArrRespostes[indexNumPreg] = escollit;
    break;

    case "checkbox":
      glArrRespostes[indexNumPreg]=escollits;
    break;

    case "text":
      glArrRespostes[indexNumPreg] = repostaText;
    break;
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

  let seccio = document.getElementById("pregunta-" + numPreg);
  tipusElement = seccio.children[2].children[0].children[0].type;

  // tipusElement = objecte.parentElement.children[3].children[0].control.type; 
  // objecte.children[0].children[0].type;
  //objecte.parentElement.children[3].children[0].control.type
  // tipusElement = objecte.parentElement.children[2].children[0].children[0].type;

  switch  (tipusElement) {
    case "radio":
      valorInicial = glViRadio;
    break;

    case "checkbox":
      valorInicial = glViCheckBox;
    break;

    case "text":
      valorInicial = glViText;
    break;
   }
 
  if (glArrRespostes[indexPreg]==valorInicial){
    alert("No hi ha cap seleccionat!");
  } else { // ELSE if (glArrRespostes[numPreg]==valorInicial)
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
  } // FINAL --> if (glArrRespostes[numPreg]==valorInicial)
}  // FINAL --> function seguentPregunta()

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
  let esCorrecte = false;
  for (let index = 0; index < glArrRespostesCorrectes.length; index++) {
    if (glArrRespostesCorrectes[index]==glArrRespostes[index]){
      esCorrecte = true;
    } else {
      esCorrecte = false;

    }
    debugger;
    
    let okOno = (esCorrecte) ? "respOk":"respNok";
    textResultat =  textResultat + "<h1>Pregunta #" + (index + 1) + "</h1>" +
        "la resp. corr. és <span class=\"respOk\">" + glArrRespostesCorrectes[index] + "</span><br>i has respost " +
                    "<span class=\"" + okOno + "\">" + glArrRespostes[index] + "</span><br>";

console.log("okOno = " + okOno);
console.log("esCorrecte = " + esCorrecte);
console.log("textResultat = " + textResultat);


    if (glArrRespostesCorrectes[index]==glArrRespostes[index]){
      textResultat =  textResultat + "<span class=\"unPunt\">Has obtingut 1 punt!<br></span>"
      puntuacioTotal ++;
    } else {
      textResultat =  textResultat + "<span class=\"capPunt\">NO has obtingut cap punt!<br></span>"
    }
    
  }
  document.getElementById("textResultat").innerHTML = textResultat;
  notaFinal.innerHTML = "Nota final = " + puntuacioTotal + " de " + glUltimaPreg;
}