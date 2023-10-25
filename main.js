const nome = prompt("inserisci il tuo nome", "Luca")
const cognome = prompt("inserisci il tuo cognome" , "Lambiase")
const colore_preferito = prompt("inserisci il tuo colore preferito" , "Rosso")

const password = nome.concat(cognome, colore_preferito, "#23")

document.getElementById("password").innerHTML = password

