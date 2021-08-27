class Warrior {
	hp
	damage

	constructor( hpMax ) {
		// Définit le nombre de points de vie du personnage
		this.hp = hpMax
		// Définit les dégâts qu'est capable de porter le personnage
		this.damage = 5;
	}

	attack( target ) {
		let base   = this.damage
		let random = this.getRandomDamage()
		target.receiveAttack( base + random )
	}

	getRandomDamage() {
		return Math.floor( Math.random() * 3 )
	}

	receiveAttack( damage ) {
		this.hp -= damage
		this.verifyIsDie()
	}

	verifyIsDie() {

	}
}