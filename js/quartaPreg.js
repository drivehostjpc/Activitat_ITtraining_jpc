let qtatPreguntes = 4;

// let respInicial = "1000";
let respInicial = "&lt;Escull una de les següents opcions.>";
let arrRespostes=[qtatPreguntes];
let arrRespostesCorrectes=[qtatPreguntes];

arrRespostes=[respInicial, respInicial, respInicial, respInicial];
// arrRespostesCorrectes=["0100", "0010", "0001", "0100"];

/*                  <option id="resp-03-01">At vero eos et accusamus et iusto odio</option>
                  <option id="resp-03-02">Et harum quidem rerum facilis est et expedita</option>
                  <option id="resp-03-03">Temporibus autem quibusdam et aut officiis debitis</option> 
                  
 */
arrRespostesCorrectes=["Temporibus autem quibusdam et aut officiis debitis",
"At vero eos et accusamus et iusto odio",
"Et harum quidem rerum facilis est et expedita",
"Temporibus autem quibusdam et aut officiis debitis"]


  //                */

let ultimaPreg = qtatPreguntes;

function pasaSeguentOpcio(objecte){
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
   // pregunta-1

   
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

function guardaTextOpcio(objecte){
  /* section id  ="pregunta-01"
  * objecte.id  => pregunta-01
  *                        ^
  *               0123456789
  * objId   = pregunta-01
  * numPreg = 1
  * indexNumPreg = 0
  * 
  * objecte.children[3].children[0].children[0][0].selected
  * objecte.children[3].children[0].children[0] coleccio options
  * */

  let pregunta, objId, numPreg, indexNumPreg, numPregSeguent;
debugger;
  objId = objecte.id;
  numPreg = parseInt(objId.charAt(9));
  indexNumPreg = numPreg - 1;
  numPregSeguent = numPreg + 1;
  cadRespostes = "";
  let valor;
  let colRepostes = objecte.children[3].children[0].children[0];
  valor = "";
  for (let index = 0; index < colRepostes.length; index++) {
    if (colRepostes[index].selected) {
      console.log("Selected " + colRepostes[index].text);
      // valor = 1;
      valor = colRepostes[index].text;
    } else{
      console.log("NO Selected " + colRepostes[index].text);
      // valor = 0;
    }
    cadRespostes = valor;
  }

  arrRespostes[indexNumPreg] = cadRespostes;
  
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