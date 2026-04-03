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

const email = new NotificationEmail();
const sms = new NotificationSMS();
const interne = new NotificationInterne();

const NvCommande = new GestionnaireEvenement("nv_commande");
const ExpeColis = new GestionnaireEvenement("ex_colis");

NvCommande.ajouterAbonne(email);
NvCommande.ajouterAbonne(interne);

ExpeColis.ajouterAbonne(sms);

console.log("client passe commande");
NvCommande.declencher({ idCommande: "nv_commande", montant: 1500 });

console.log("préparateur valide l'expédition...");
ExpeColis.declencher({ idCommande: "expedition_nv_commande" });
