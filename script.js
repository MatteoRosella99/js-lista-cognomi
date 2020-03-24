var licognomi = ["Rossi" , "Bianchi" , "Matonti" , "Giordano" , "Mele"];
var lista;
var cognome;
var posizione;

//inserimento cognome da parte dell'utente

cognome = prompt("Inseirisci il tuo cognome");
licognomi.push(cognome);

//ordinazione alfabetica della lista

lista = licognomi.sort();
licognomi.sort;
console.log(lista);

//verifica poszione del cognome dato

posizione = lista.indexOf(cognome);
posizione++;

//output per l'utente

document.getElementById("tit").innerHTML = "Cognomi ordinati alfabeticamente <br><br>" + licognomi + "<br><br>Il cognome " + cognome + " si trova in posizione numero " + posizione
