class GestionnaireEvenement {
  constructor(nomEvenement) {
    this.nomEvenement = nomEvenement;
    this.abonnes = [];
  }

  ajouterAbonne(notification) {
    this.abonnes.push(notification);
  }

  declencher(donnees) {
    console.log("test_declenchement", `${this.nomEvenement}`);
    this.abonnes.forEach((abonne) => {
      abonne.envoyer(donnees);
    });
  }
}
