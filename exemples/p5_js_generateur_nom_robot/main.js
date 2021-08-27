/*******************************************/
/* FONCTION DE GENERATION DE NOM ALEATOIRE */
/*******************************************/

/**
 * Fonction générant un nom de robot aléatoire
 * @param nameSize  Nombre de caractères dans le nom.
 *                  Si on ne renseigne pas de premier paramètre, le nom comportera 4 caractères.
 * @param prefix    Préfix à ajouter au nom du robot.
 */
let generateRobotName = ( nameSize = 4 , prefix = '' ) => {
	// La variable "rst" var contenir le résultat final, c'est à dire le nom du robot.
	// On initialise la variable en y insérant le préfix renseigné dans les paramètres.
	let rst      = prefix
	// Définition de tous les caractères pouvant être inséeés dans le nom.
	let letters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	// Début d'une boucle qui va se répéter autant de fois que l'on demande de caractères dans le nom.
	for( let i = 0 ; i < nameSize ; i++ ) {
		// Génération d'un nombre aléatoire correspondant à une position d'une lettre dans la variable "letters"
		// Math.random renvoie un nombre aléatoire décimal compris entre 0 et 1
		//      exemple : 0.47
		// On multiplie cette valeur par le nombre de total de caractères possibles à récupérer...
		//      ce qui donne un nombre compris entre 0.000000001 et le nombre de caractères dans "letters".
		//      exemple : 0.47 * 36 = 16.92
		// Math.floor arrondi la valeur à l'inférieur pour ne conserver que le nombre entier
		//      exemple : 16.92 => 16
		let randomLetter = Math.floor( Math.random() * letters.length )
		// On ajoute au résultat final le caractère qui se trouve à la position indiquée par "randomLetter"
		//      exemple : position 16 => Q
		//      Attention : la premier lettre (ici A) est à la position 0 !
		rst += letters[randomLetter]
	}
	// Fin de la boucle, il a ajouté le nombre de caractères demandés à "rst".

	// La fonction renvoie comme résultat le nom généré
	return rst;
}


/************************/
/* TESTS DE LA FONCTION */
/************************/

// Premier test : appeler la fonction sans paramètres.
// En vu des paramètres par défaut, il sortira 4 lettre et pas de préfixe.
// exemple : C3PO
console.log( generateRobotName() )

// Second test : indiquer dans en paramètres que l'on souhaite 4 lettres et un préfixe 'ROBOT_'
// Les paramètres de la fonction seront ceux envoyés et non les valeurs par défaut.
// exemple : ROBOT_C3PO
console.log( generateRobotName( 4 , "ROBOT_") )

// Troisième test : modification du premier paramètres seulement.
// Donc le paramètre "nameSize" vaudra la valeur indiquée (20) et "prefix" vaudra la valeur par défaut : ''.
// exemple : C3P0GZ5GXZXW85FR46CP
console.log( generateRobotName(20) )

// Quatrième test : double appel de la fonction.
// On va d'abord générer un préfixe aléatoire avec deux caractères, et on va ajouter à la suite un underscore (_).
// exemple : G2_
// A la suite de cela, on va générer le nom du projet auquel on va ajouter le prefix généré juste avant.
// exemple : G2_GT5V38
let prefix = generateRobotName(2) + '_'
console.log( generateRobotName( 6, prefix ) )

// Cinquième test : double appel de la fonction
// Exactement la même chose que le quatrième test, mais écrit en une seule ligne.
// Il est possible d'appeler en paramètre d'une fonction.
// Le second paramètre va renvoyer trois caractères (2 aléatoire + _) (ex: G2_), ce qui va servir de valeur au second paramètre de la fonction.
// exemple : G2_GT5V38
console.log( generateRobotName( 6, generateRobotName(2) + '_' ) )