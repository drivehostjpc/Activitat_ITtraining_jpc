let arrRespostes=[4];
let arrRespostesCorrectes=[4];

arrRespostes=["buit", "buit", "buit", "buit"];
arrRespostesCorrectes=["resp1", "resp2", "resp3", "resp4"];

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


   //objecte.parentElement.children[2].children[0].children[0].value
   // resp-01

   
   debugger;
  if (arrRespostes[indexNumPreg]=="buit"){
  alert("No hi ha res!");
  } else { // ELSE if (arrRespostes[numPreg]=="buit")
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
  }   // FINAL if (arrRespostes[numPreg]=="buit")
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
debugger;
  objId = objecte.id;
  numPreg = parseInt(objId.charAt(9));
  indexNumPreg = numPreg - 1;
  numPregSeguent = numPreg + 1;
  let repostaText = document.getElementById("resp-0" + numPreg).value;
  arrRespostes[indexNumPreg] = repostaText;
  
  console.log("La arrRespostes[" + indexNumPreg + "] = " + arrRespostes[indexNumPreg]);
 }


 function mostraResultat(){
  /*  id="resultat"  */
  resultat = document.getElementById("resultat");
  resultat.classList.remove("elementOcult");
  resultat.classList.add("elementVisible");
  
 }