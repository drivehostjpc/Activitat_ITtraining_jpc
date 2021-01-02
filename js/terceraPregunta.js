let qtatPreguntes = 4;

let respInicial = "buit";
let arrRespostes=[qtatPreguntes];
let arrRespostesCorrectes=[qtatPreguntes];

arrRespostes=[respInicial, respInicial, respInicial, respInicial];
arrRespostesCorrectes=["resp1", "resp2", "resp3", "resp4"];

let ultimaPreg = qtatPreguntes;

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


   //objecte.parentElement.children[2].children[0].children[0].value
   // resp-01

   
   debugger;
  if (arrRespostes[indexNumPreg]==respInicial){
  alert("No hi ha res!");
  } else { // ELSE if (arrRespostes[numPreg]==respInicial)
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
  }   // FINAL if (arrRespostes[numPreg]==respInicial)
}

/***
 * 
 * 
 */

function guardaText(objecte){
  /* section id="pregunta-1"
  * objecte.id => pregunta-1
  *                        ^
  *               0123456789
  * objId   = pregunta-1
  * numPreg = 1
  * */

  let pregunta, objId, numPreg, indexNumPreg, numPregSeguent;

  objId = objecte.id;
  numPreg = parseInt(objId.charAt(9));
  indexNumPreg = numPreg - 1;
  numPregSeguent = numPreg + 1;
  let repostaText = document.getElementById("resp-0" + numPreg).value;
  arrRespostes[indexNumPreg] = repostaText;
  
  console.log("La arrRespostes[" + indexNumPreg + "] = " + arrRespostes[indexNumPreg]);
 }

 function mostraResultat() {
  resultat = document.getElementById("resultat");
  notaFinal = document.getElementById("notaFinal");
  resultat.classList.remove("elementOcult");
  resultat.classList.add("elementVisible");

/*
 * arrRespostes=[-1, -1, -1, -1];
 * arrRespostesCorrectes=[1, 2, 3, 4];
 */
  // let textResultat = document.getElementById("textResultat");
  let puntuacioTotal = qtatPreguntes;
  let puntuacio = 0;
  let textResultat = "";


  let textResposta, textRespostaCorrecta, conte;
  for (let index = 0; index < arrRespostesCorrectes.length; index++) {
    textResultat =  textResultat + "<h1>Pregunta #" + (index + 1) + "</h1>" +
        "la correcta és " + arrRespostesCorrectes[index] + " i has respost " +
                    arrRespostes[index] + "<br>";
    textResposta = arrRespostes[index];
    textRespostaCorrecta = arrRespostesCorrectes[index]
    conte = textResposta.includes(textRespostaCorrecta);
    
    console.log("textResposta = " + textResposta);
    console.log("textRespostaCorrecta = " + textRespostaCorrecta);
    console.log("conte = " + conte);
    
    if (conte){
      textResultat =  textResultat + "<span class=\"unPunt\">Has obtingut 1 punt!<br></span>"
      puntuacio ++;
    } else {
      textResultat =  textResultat + "<span class=\"capPunt\">NO has obtingut cap punt!<br></span>"
    }
    
  }
  document.getElementById("textResultat").innerHTML = textResultat;
  notaFinal.innerHTML = "Nota final = " + puntuacio + " de " + puntuacioTotal;
}