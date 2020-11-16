Ce code correspond à l'application disponible [ici](https://crypto-compare-eta.vercel.app/).

# But de l'application

Cette application permet de chercher des informations sur des cryto-monnaies et notamment de les comparer entre elles directement.

Il y a pour le moment 4 grandes fonctionnalités sur le site :

`Rechercher`: permettant d'avoir plusieurs informations sur une crypto-monnaie, avec un graphique de prix dont on peut changer l'échelle<br />
`Versus`: proposant de comparer 2 crypto-monnaies sur leurs stats et sur un graphique commun en %<br />
`Accueil`: où l'on peut retrouver la répartition du marketcap du top 10, ainsi que les tendances<br />
`Favoris` : permettant de retrouver toutes les infos des crypto-monnaies préférées de l'utilisateur en 1 clic

Une page `DeFi` est aussi en cours de création et pourrait arriver bientôt.

Tous les graphiques peuvent être vus selon 6 échelles de temps (1 jour, 1 semaine, 1 mois, 3 mois, 6 mois, 1an).

# Technologies utilisées

## React

Le framework React a été utilisé pour mener à bien ce projet.<br />
L'approche des `classes` a été choisie pour pouvoir travailler aisément avec Redux.

## Redux

Le projet manipulant un très grand nombre de données, l'approche Redux a été choisie.<br />
Elle permet de faciliter aussi la gestion de favoris et de charts.

## API

Seulement une API a été utilisée lors du projet :

### `Coingecko`

Cette API permet d'obtenir une plétorée d'informations sur les crypto-monnaies.<br />
Le taux de réponse est très bon, l'API ne nécessite pas de clé, les réponses sont bien organisées et on peut lui soumettre jusqu'à 100 requêtes par minute. C'est donc une API très agréable pour travailler avec.

L'API est utilisée pour obtenir :
<ul>
<li><strong>La liste de toutes les crypto-monnaies</strong> : utile pour la recherche de crypto-monnaies</li>
<li><strong>Diverses informations sur une crypto-monnaie</strong> : utile pour la section Rechercher et Versus</li>
<li><strong>Les évolutions de prix sur une crypto-monnaie</strong> : utile pour réaliser tous les graphiques</li>
<li><strong>Les crypto-monnaies en tendances</strong> : utile pour les afficher en page d'accueil</li>
<li><strong>La répartion du marketcap dans le top 10</strong> : utile pour le mettre sous forme de diagramme circulaire en page d'accueil</li>
</ul>

## Chart.js

Chart.js est une bibliothèque qui permet de faire différents diagrammes et graphiques en JavaScript. Il existe une version adaptée pour React et c'est celle-ci qui est utilisée dans ce projet. 

On la retrouve dans les graphiques de prix et dans le diagramme circulaire du début.

Les graphiques sont beaux et bien gérés par la bibliothèque. Le gros défaut est la documentation incomplète et même inexistante pour React, qui peut ralentir le travail.
