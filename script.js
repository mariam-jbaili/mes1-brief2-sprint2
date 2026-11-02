// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

// À réaliser :
// 1. Afficher les participants à partir de ce tableau.

function afficher() {
  const liste = document.getElementById("liste-participants");
  liste.innerHTML = "";

  participants.forEach(element => {
    const li = document.createElement("li");
          li.classList.add("participant");

    if (element.statut === "Présent") {
      li.classList.add("est-present");
    }

    const info = document.createElement("div");
    info.classList.add("participant-info");

    const id = document.createElement("span");
    id.classList.add("participant-id");
    id.textContent = "#" + element.id;

    const details = document.createElement("div");

    const nom = document.createElement("h3");
    nom.classList.add("participant-name");
    nom.textContent = element.nom;

    const badge = document.createElement("span");

    if (element.statut === "Présent") {
      badge.classList.add("badge", "badge-present");
    } else {
      badge.classList.add("badge", "badge-inscrit");
    }

    badge.textContent = element.statut;

    details.appendChild(nom);
    details.appendChild(badge);

    info.appendChild(id);
    info.appendChild(details);

    const actions = document.createElement("div");
    actions.classList.add("participant-actions");

    const buttonPresence = document.createElement("button");
    buttonPresence.classList.add("button", "button-presence");
    // buttonPresence.textContent =
    // //   element.statut === "Inscrit"
          if (element.statut === "Inscrit") {
              buttonPresence.textContent = "Remettre inscrit"
          } else{
              buttonPresence.textContent = "Marquer présent"
          }

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("button", "button-delete");
    buttonDelete.textContent = "Supprimer";
    buttonDelete.type = "button";
    buttonDelete .addEventListener("click",supprimer )

    actions.appendChild(buttonPresence);
    actions.appendChild(buttonDelete);

    li.appendChild(info);
    li.appendChild(actions);

    liste.appendChild(li);
  });
  console.log("salut")
}
afficher();

// 2. Ajouter un participant avec un id unique et le statut "Inscrit".


function ajouter() {
  const formulaire = document.getElementById("formulaire-participant");
  const inputNom = document.getElementById("nom");
  const erreur = document.getElementById("erreur-nom");

  const nom = inputNom.value.trim();

  if (nom === "") {
    erreur.textContent = "Veuillez saisir un nom";
    return;
  }

  const nouveauParticipant = {
    id: participants.length + 104,
    nom: nom,
    statut: "Inscrit"
  };

  participants.push(nouveauParticipant);

  afficher();

  formulaire.reset();
}


const boutonAjouter = document.querySelector(".button-primary");

boutonAjouter.addEventListener("click",function(event) {
  event.preventDefault();
  ajouter();
});

// 3. Changer le statut du participant choisi dans les deux sens.


// 4. Supprimer le participant choisi après confirmation.

function supprimer(element) {
  const confirmation = confirm("tu veux suprimer ?");

  if (confirmation) {
     participants.splice(participants.indexOf(element), 1);

    afficher();
  }
}
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.
