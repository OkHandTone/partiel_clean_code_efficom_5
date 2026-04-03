import {
  NotificationEmail,
  NotificationSMS,
  NotificationInterne,
} from "../observer/Notifications.js";

export default class NotificationFactory {
  static creer(type, destinataire) {
    switch (type) {
      case "EMAIL":
        return new NotificationEmail(destinataire);
      case "SMS":
        return new NotificationSMS();
      case "INTERNE":
        return new NotificationInterne();
      default:
        throw new Error(`Type de notification inconnu : ${type}`);
    }
  }
}
