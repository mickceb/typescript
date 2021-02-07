/*
 ADMIN = 0
 MODERATOR = 1
 SUPPORT = 2
 USER_READ_ONLY = 3
 */
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
var users = {
    pseudo: "Batman",
    level: Level.SUPPORT
};
if (users.level === Level.SUPPORT) {
    console.log("\n   Bienvenue " + users.pseudo + "\n   Vous travaillez au service support\n   " + Level.SUPPORT + "\n   ");
}
var colors;
(function (colors) {
    colors[colors["bleu"] = 0] = "bleu";
    colors[colors["rouge"] = 1] = "rouge";
    colors[colors["vert"] = 2] = "vert";
})(colors || (colors = {}));
var x = colors[1];
console.log(x);
