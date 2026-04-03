Choix design pattern :
pour moi le design pattern parfais apres qlq relecture, c est l observer....

quand on parle de notification on parle d observer, cela permet un declenchement lors du changement d un etat et j'ai aussi choisi ce Desgin pattern la car la plateforme e-commerce plusieurs canaux (email, sms et internet) sans être couplé à eu.

Si demain l'entreprise veut ajouter une notification discord ou autres, elle le pourra facilement

il faudra juste créer une nouvelle classe et de l'abonner au Gestionnaire d'Événements et normalement, pas besoin de toucher au code source.


j etais partie sur un test avec des buttons en html mais finalement avec les soucis CORS, je n ai pas fait cette methode


Pourquoi le Design pattern Factory ?

meme si l'Observer réponde au besoin principal, j'ai décidé d'implémenter une `NotificationFactory` pour rendre le système encore plus robuste et prêt pour la production.
L'instanciation des objets (new) est centralisée dans "l'usine". Le reste de l'application n'a plus besoin de connaître les classes concrètes email, sms etc...

Si demain ShopEase souhaite ajouter un canal "WhatsApp", il suffira d'ajouter un simple `case` dans la Factory, sans avoir à modifier le code principal de la plateforme.



TEST : node app.js
