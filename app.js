class GestionnaireEvenement {
  constructor(nomEvenement) {
    this.nomEvenement = nomEvenement;
    this.abonnes = [];
  }

  ajouterAbonne(notification) {
    this.abonnes.push(notification);
  }

  declencher(donnees) {
    console.log("\ntest_declenchement", `${this.nomEvenement}`);
    this.abonnes.forEach((abonne) => {
      abonne.envoyer(donnees);
    });
  }
}

class NotificationEmail {
  envoyer(donnees) {
    console.log("notif email");
  }
}

class NotificationSMS {
  envoyer(donnees) {
    console.log("notif sms");
  }
}

class NotificationInterne {
  envoyer(donnees) {
    console.log("notif interne");
  }
}
