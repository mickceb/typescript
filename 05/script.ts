/*
 ADMIN = 0
 MODERATOR = 1
 SUPPORT = 2
 USER_READ_ONLY = 3
 */

 enum Level {
  ADMIN,
  MODERATOR,
  SUPPORT,
  USER_READ_ONLY
 }

 const users = {
   pseudo: "Batman",
   level: Level.SUPPORT
 }

 if (users.level === Level.SUPPORT) {
   console.log(`
   Bienvenue ${users.pseudo}
   Vous travaillez au service support
   ${Level.SUPPORT}
   `)
 }

 enum colors {
   bleu,
   rouge,
   vert
 }

 let x = colors[1]
 console.log(x)