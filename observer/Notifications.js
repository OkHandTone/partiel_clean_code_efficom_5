export class NotificationEmail {
  constructor(destinataire = "Client") {
    this.destinataire = destinataire;
  }

  envoyer(donnees) {
    console.log(
      `[EMAIL AU ${this.destinataire.toUpperCase()}] Concerne la commande : ${donnees.idCommande}`,
    );
  }
}

export class NotificationSMS {
  envoyer(donnees) {
    console.log("notif sms");
  }
}

export class NotificationInterne {
  envoyer(donnees) {
    if (donnees.montant > 1000) {
      console.log(
        `notif interne : ALERTE LOGISTIQUE (Montant: ${donnees.montant}€)`,
      );
    }
  }
}
