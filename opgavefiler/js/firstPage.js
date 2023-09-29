/* Opgave 1*/
let myName = "Anders";
let myWork = "5år";
let besked = `hej <br>${myName} <br>du har arbejdet for virksomhede i ${myWork}`;

// din kode her
let messageContainer = document.getElementById("1234");
messageContainer.innerHTML = besked;
console.log(messageContainer);
/* Opgave 1*/

// din kode her
const myData = [
  {
    navn: "T-shirt",
    beskrivelse: "En t-shirt lavet af bomuld",
    pris: 99,
  },
  {
    navn: "Jeans",
    beskrivelse: "Blå denim jeans med straight fit",
    pris: 299,
  },
  {
    navn: "Hættetrøje",
    beskrivelse: "En grå hættetrøje med lynlås",
    pris: 199,
  },
];

// Reference til HTML-elementet, hvor produktlisten skal indsættes
const produktListeElement = document.getElementById("produktListe");

// Iterer gennem hvert produkt i myData og opret HTML-elementer
myData.forEach((produkt) => {
  const produktElement = document.createElement("article");
  produktElement.className = "produkt";

  // Opret en template string med produktinformation
  produktElement.innerHTML = `
        <h2>${produkt.navn}</h2>
        <p>${produkt.beskrivelse}</p>
        <p>Pris: ${produkt.pris} kr.</p>
    `;

  // Tilføj produktElement til produktListeElement
  produktListeElement.appendChild(produktElement);
});
/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];

// Hent DOM-elementer
const myForm = document.getElementById("formular");
const submitButton = document.getElementById("indsend-knap");
const personList = document.getElementById("person-liste");

// Lyt efter formularindsendelse
myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Forhindrer at formular indsendes og siden genindlæses

  // Hent værdier fra inputfelterne
  const navnInput = document.querySelector('input[name="navn"]');
  const alderInput = document.querySelector('input[name="alder"]');
  const navn = navnInput.value.trim();
  const alder = alderInput.value.trim();

  // Tjek om både navn og alder er udfyldt
  if (navn !== "" && alder !== "") {
    // Tilføj person til myPersons-array
    myPersons.push({ navn, alder });

    // Nulstil inputfelter
    navnInput.value = "";
    alderInput.value = "";

    // Opdater og vis den sorteret liste
    opdaterSorteretListe();
  }
});

// Funktion til at sortere personer efter alder og opdatere den sorteret liste
function opdaterSorteretListe() {
  // Sorter personer efter alder
  myPersons.sort((a, b) => parseInt(a.alder) - parseInt(b.alder));

  // Opdater den sorteret liste
  personList.innerHTML = "";

  myPersons.forEach((person) => {
    const personElement = document.createElement("div");
    personElement.textContent = `Navn: ${person.navn}, Alder: ${person.alder}`;
    personList.appendChild(personElement);
  });
}
