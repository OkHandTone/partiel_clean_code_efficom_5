import GestionnaireEvenement from "./observer/GestionnaireEvenement.js";
import NotificationFactory from "./factory/NotificationFactory.js";

const email = NotificationFactory.creer("EMAIL", "Client");
const emailSupport = NotificationFactory.creer("EMAIL", "Support");
const sms = NotificationFactory.creer("SMS");
const interne = NotificationFactory.creer("INTERNE");

const NvCommande = new GestionnaireEvenement("NOUVELLE COMMANDE");
const ExpeColis = new GestionnaireEvenement("EXPÉDITION COLIS");
const PaiementRefuse = new GestionnaireEvenement("PAIEMENT REFUSÉ");

NvCommande.ajouterAbonne(email);
NvCommande.ajouterAbonne(interne);
ExpeColis.ajouterAbonne(sms);
PaiementRefuse.ajouterAbonne(emailSupport);

console.log("SCÉNARIO 1 : Un client passe une commande classique (999€)");
NvCommande.declencher({ idCommande: "CMD-999", montant: 999 });

console.log("\nSCÉNARIO 2 : Un client passe une très grosse commande (1001€)");
NvCommande.declencher({ idCommande: "CMD-1001", montant: 1001 });

console.log("\nSCÉNARIO 3 : Le préparateur de commande expédie le colis");
ExpeColis.declencher({ idCommande: "CMD-test_expe" });

console.log(
  "\n❌ SCÉNARIO 4 : Le paiement par carte bancaire du client échoue",
);
PaiementRefuse.declencher({
  idCommande: "CMD-pas_asseez_fond",
  raison: "Fonds insuffisants",
});
