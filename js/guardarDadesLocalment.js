const ct_NomMarcador = 0;  // ct_NomMarcador
const ct_NotaMarcador = 1; // ct_NotaMarcador
const ct_DataMarcador = 2; // ct_DataMarcador
const ct_Capssalera = 0;

let glArrMarcadors = [[]];

glArrMarcadors[ct_Capssalera][ct_NomMarcador]="Noms";
glArrMarcadors[ct_Capssalera][ct_NotaMarcador]="Notes";
glArrMarcadors[ct_Capssalera][ct_DataMarcador]="Data";

salvaNomINota("Ernest","4","15/11/2020");
salvaNomINota("Ramon","3","12/11/2020");

/** La funció carregaMarcador amaga a l'objecte article
 * amb id = marcador, i a l'objecte taula amb id = taulaMarcadors
 * li afegeix tots els registres de la variable global glArrMarcadors
 */
function carregaMarcador(){
  let marcador = document.getElementById("marcador");
  marcador.classList.remove("elementOcult");
  marcador.classList.add("elementVisible");
  debugger;
  let taulaMarcadors = document.getElementById('taulaMarcadors');
  let contFila, fila, contColu, cella;
  
  for (contFila = 0; contFila < glArrMarcadors.length; contFila++) {
      fila = document.createElement('tr');
      for (contColu = 0; contColu < glArrMarcadors[contFila].length; contColu++) {
          if (contFila == ct_Capssalera) {
            cella = document.createElement('th');
          } else {
            cella = document.createElement('td');
          }
          cella.textContent = glArrMarcadors[contFila][contColu];
          fila.appendChild(cella);
      }
      taulaMarcadors.appendChild(fila);
  }
}

/** La funció salvaNomINota rep tres parametres
 * @INPUT nom
 * @INPUT nota
 * @INPUT data
 * 
 * i els afegeix la variable global glArrMarcadors
 */
function salvaNomINota(nom,nota,data){
  glArrMarcadors.push([nom,nota,data]);
  console.table(glArrMarcadors);
}

function guardaNom(){
  let nomUsuari, recullDades;
  nomUsuari = document.getElementById("nomUsuari").value;
  if (nomUsuari!=""){
    glNomUsuari = nomUsuari;
    recullDades = document.getElementById("recullDades");
    recullDades.classList.add("elementOcult");
    recullDades.classList.remove("elementVisible");
    salvaNomINota(glNomUsuari,glMarcador,glData);
    carregaMarcador();
  } else {
    alert("El camp per posar el nom està buit!");
  }
}

function guardarResposta(){
  let recullDades, puntsUsuari;
  document.getElementById("resultat").classList.remove("elementVisible");
  document.getElementById("resultat").classList.add("elementOcult");
  if(typeof(Storage) !== "undefined") {
    recullDades = document.getElementById("recullDades");
    recullDades.classList.remove("elementOcult");
    recullDades.classList.add("elementVisible");
    
    puntsUsuari = document.getElementById("puntsUsuari");
    puntsUsuari.innerHTML = glMarcador;
  } else { // ELSE ==>> if(typeof(Storage) !== "undefined")
    carregaMarcador();
  } // FINAL ==>> if(typeof(Storage) !== "undefined")
} // FINAL ==>> function guardarResposta(objecte)