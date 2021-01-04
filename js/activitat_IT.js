'use strict';

let glUltimaPreg, glViRadio, glViCheckBox, glViText, glViSelectOne;
let glArrRespostes, glArrRespostesCorrectes;

glUltimaPreg = 4;

glViRadio = -1;
glViCheckBox = "0000";
glViText = "buit";
glViSelectOne = "&lt;Escull una de les següents opcions.>";

glArrRespostes = [glUltimaPreg];
glArrRespostesCorrectes = [glUltimaPreg];

/**
 * pregunta-01-tx -> text
 * pregunta-02-ch -> checkbox
 * pregunta-03-ra -> radio
 * pregunta-04-so -> select-one */

 /*
  * tipusPreg = tx - text, ch - checkbox
  *             ra - radio, so - select-one
  */

glArrRespostes=[glViText,glViCheckBox,glViRadio,glViSelectOne];
glArrRespostesCorrectes=["resp1","0100",2,"Temporibus autem quibusdam et aut officiis debitis"];

function obteSeguentPregunta(cadNumPregActual) {
  let cadNumPreg;
  let seccions = document.body.getElementsByTagName('article');
  let seguentPregunta, seccio;
    
    for (let i = 0, length = seccions.length; i < length; i++) {
      seccio = seccions[i];
      // seccio = pregunta-01-XX
      //                   ^^
      //          01234567890123
      // indexNumPreg = 
      cadNumPreg = seccio.id.charAt(9) + seccio.id.charAt(10);
  
      if ((cadNumPreg==cadNumPregActual) && (parseInt(cadNumPreg) < glUltimaPreg)){
        seguentPregunta = seccions[i+1].id.charAt(12) + seccions[i+1].id.charAt(13);
        break;
      }
    } // for (let i = 0, length = seccions.length; i < length; i++) 
    return seguentPregunta;
}  // FINAL ==>> function obteSeguentPregunta(cadNumPregActual)

function guardaInputEscollit(objecte) {
/* id => pregunta-01-xx
 * ######         ^^
 * ######01234567890123
 * id         = pregunta-01-xx
 * cadNumPreg = id.charAt(9)+id.charAt(10);
 * numPreg    = parseInt(cadNumPreg);
 * 
 * id => pregunta-01-xx
 * ######            ^^
 * ######01234567890123
 * cadTipusPreg = id.charAt(12)+id.charAt(13);
 */

  let objId, intNumPreg, cadNumPreg, indexNumPreg, cadTipusPreg;
  let colInputs, repostaText, seccio;

  objId = objecte.parentElement.id 
  cadNumPreg = objId.charAt(9) + objId.charAt(10);
  intNumPreg = parseInt(cadNumPreg);
  indexNumPreg = intNumPreg - 1;
  cadTipusPreg = objId.charAt(12) + objId.charAt(13);

  colInputs = objecte.children;

  repostaText = "";


  seccio = document.getElementById("pregunta-" + intNumPreg);

  switch  (cadTipusPreg) {
    case "tx":
      repostaText = document.getElementById("resp-" + cadNumPreg).value;
      break; // FINAL case "tx":

    case "ch":
      for (let index = 0; index < colInputs.length; index++) {
        if(colInputs[index].children[0].checked){
          repostaText = repostaText + 1;
        } else{
          repostaText = repostaText + 0;
        }
      } // FINAL ==>> for (let index = 0; index < colInputs.length; index++)
      break; // FINAL case "ch":

    case "ra":
      for (let index = 0; index < colInputs.length; index++) {
        if(colInputs[index].children[0].checked){
          repostaText = index;
          break;
        } // FINAL ==>> for (let index = 0; index < colInputs.length; index++)
      }
      break; // FINAL case "ra":

    case "so":
      for (let index = 0; index < colInputs[0].children[0].length; index++) {
        if(colInputs[0].children[0][index].selected){
          repostaText = colInputs[0].children[0][index].value;
        } 
      }
      break; // FINAL case "so":
    }
    console.log("cadTipusPreg = " + cadTipusPreg);
    console.log("repostaText = " + repostaText);
    
    glArrRespostes[indexNumPreg] = repostaText;
    console.log("glArrRespostes[" + indexNumPreg + "] = " + glArrRespostes[indexNumPreg]);
} // FINAL function guardaInputEscollit(objecte)



function seguentPregunta(objecte) {
/* id => pregunta-01-xx
 * ######         ^^
 * ######01234567890123
 * id         = pregunta-01-xx
 * cadNumPreg = id.charAt(9)+id.charAt(10);
 * numPreg    = parseInt(cadNumPreg);
 * 
 * id => pregunta-01-xx
 * ######            ^^
 * ######01234567890123
 * cadTipusPreg = id.charAt(12)+id.charAt(13);
 */

  let objId, numPreg, cadNumPreg, indexNumPreg, cadTipusPreg;
  let numPregSeguent, cadNumPregSeguent, cadTipusPregSeguent;
  let valorInicial, pregunta;

  objId = objecte.parentElement.id 
  cadNumPreg = objId.charAt(9)+objId.charAt(10);
  numPreg = parseInt(cadNumPreg);
  numPregSeguent = numPreg + 1;
  cadNumPregSeguent = numPregSeguent.toString();
  
  cadNumPregSeguent = (cadNumPregSeguent<10) ? 0+cadNumPregSeguent:cadNumPregSeguent;
    
  indexNumPreg = numPreg - 1;
  cadTipusPreg = objId.charAt(12) + objId.charAt(13);
  
  cadTipusPregSeguent = obteSeguentPregunta(cadNumPreg);
  switch  (cadTipusPreg) {
    case "tx": // INICI case "tx"
      valorInicial = glViText;
      break;   // FINAL case "tx"

    case "ch": // INICI case "ch"
      valorInicial = glViCheckBox;
      break;   // FINAL case "ch":

    case "ra": // INICI case "ra"
      valorInicial = glViRadio;
      break;   // FINAL case "ra":

    case "so": // INICI case "so"
      valorInicial = glViSelectOne;
      break;   // FINAL case "so":
  }

  if (glArrRespostes[indexNumPreg] == valorInicial){
    alert("No hi ha cap seleccionat!");
  } else { // ELSE ==>> if (glArrRespostes[indexNumPreg] == valorInicial)
    pregunta = document.getElementById("pregunta-" + cadNumPreg + "-" + cadTipusPreg);
    pregunta.classList.remove("elementVisible");
    pregunta.classList.add("elementOcult");
    if (numPreg!=glUltimaPreg) {
      pregunta = document.getElementById("pregunta-" + cadNumPregSeguent + "-" + cadTipusPregSeguent);
      pregunta.classList.remove("elementOcult");
      pregunta.classList.add("elementVisible");
    } else { // ELSE ==>> if (numPreg!=glUltimaPreg)
      pregunta = document.getElementById("resultat");
      pregunta.classList.add("elementVisible");
      pregunta.classList.remove("elementOcult");
      mostraResultat();
    } // FINAL ==>> if (numPreg!=glUltimaPreg) 
  } // FINAL ==>> if (glArrRespostes[indexNumPreg] == valorInicial)
} // FINAL ==>> function seguentPregunta(objecte)


function mostraResultat() {
  let resultat,notaFinal;
  let puntuacioTotal, puntsResposta, textResultat, resultatResposta;

  resultat = document.getElementById("resultat");
  notaFinal = document.getElementById("notaFinal");
  resultat.classList.remove("elementOcult");
  resultat.classList.add("elementVisible");

  puntuacioTotal = 0;
  puntsResposta = 0;
  textResultat = "";
  resultatResposta = "";

  for (let index = 0; index < glArrRespostesCorrectes.length; index++) {
    if (glArrRespostesCorrectes[index]==glArrRespostes[index]) {
      resultatResposta =  "respOk";
      puntsResposta = "<span class=\"unPunt\">Has obtingut 1 punt!<br></span></span>";
      puntuacioTotal++; 
    } else { // ELSE ==>> if (glArrRespostesCorrectes[index]==glArrRespostes[index])
      resultatResposta =  "respNok";
      puntsResposta = "<span class=\"capPunt\">NO has obtingut cap punt!<br></span></span>";      
    } // FINAL ==>> if (glArrRespostesCorrectes[index]==glArrRespostes[index])

    textResultat =  textResultat +
      '<span class="titolResposta">Pregunta #'+
      (index + 1) +
      '</span>' +
      puntsResposta +
      '<span class="textResposta">La resp. corr. és <span class="respOk">' +
      glArrRespostesCorrectes[index] +
      '</span> i</span><br><span class="textResposta">la teva resp. és <span class="' +
      resultatResposta +
      '">' +
      glArrRespostes[index] +
      '</span></span><br>';
  } // FINAL for (let index = 0; index < glArrRespostesCorrectes.length; index++)

  document.getElementById("textResultat").innerHTML = textResultat;
  notaFinal.innerHTML = "Nota = " + puntuacioTotal + "/" + glUltimaPreg;
} // FINAL ==>> function mostraResultat()