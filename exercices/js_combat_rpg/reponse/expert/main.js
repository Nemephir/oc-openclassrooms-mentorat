const Warrior      = require( './src/Characters/Warrior' )
const Witch        = require( './src/Characters/Witch' )
const IronSword    = require( './src/Items/IronSword' )
const MagicStick   = require( './src/Items/MagicStick' )

let getRandomChallengerNumber = () => {
	return Math.floor( Math.random() * challengers.length )
}

let switchChallengerTurn = () => {
	turnTo++
	if( turnTo >= challengers.length ) {
		turnTo = 0
	}
}

let getOtherChallenger = () => {
	let targetNo = turnTo
	while( targetNo === turnTo ) {
		targetNo = getRandomChallengerNumber()
	}

	return challengers[targetNo]
}

let executeTurn = () => {
	console.log( '-----------------------------------' )
	console.log( challengers )
	console.log( turnTo )
	console.log( `Au tour de ${challengers[turnTo].name}` )
	console.log( '' )

	let target = getOtherChallenger()
	challengers[turnTo].attack( target )

	if( ! target.isAlive() ) {
		challengers.splice( challengers.indexOf(target) , 1 )
	}

	console.table( challengers )
}

let runBattle = () => {
	turnTo = getRandomChallengerNumber()
	while( challengers.length > 1 ) {
		executeTurn()
		switchChallengerTurn()
	}
	console.log( `BATAILLE TERMINEE !! ${challengers[0].name} a gagné !` )
}

let turnTo

let challengers = [
	new Warrior( "Alfred", 40 )
		.equip( new IronSword() ),

	new Witch( "Germaine", 30 )
		.equip( new MagicStick() ),

	new Witch( "Rebecca" , 35 )
		.equip( new MagicStick() )
]

console.table( challengers )
runBattle()