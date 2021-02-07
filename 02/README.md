# Typescript - Les premiers pas en TS

## C'est quoi
```
function getLowerCaseString(arg) {
  return arg.toLowerCase()
}
// UnCaught TYpeError: Cannot read property 'toLowerCase' of undefined
```
En Typescript, on précise le TYPE d'argument à passer à la fonction et l'argument doit être correct. On évite ainsi d'avoir l'eereur au moment du lancement de la fonction.

Typescript doit être compilé en JS pour être compris par le browser. Il nous alerte des erreurs au moment de l'écriture et du compilage du code.

> Exemple : je veux manger une pizza 4 fromages. Si, lorsque j'en commande une je ne précise le TYPE (4 fromages) alors le livreur (compiler) ne saura pas laquelle m'apporter - risque d'erreur.

## JS vs TS + compiler
```
[sudo] npm i -g typescript

npx tsc
```
