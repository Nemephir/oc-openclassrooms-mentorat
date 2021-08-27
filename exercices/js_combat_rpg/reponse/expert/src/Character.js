class Character {

	name
	hpMax
	hp
	equiped

	constructor( name, hpMax ) {
		this.name  = name
		this.hpMax = hpMax
		this.hp    = hpMax
	}

	equip( item ) {
		this.equiped = item
		return this
	}

	attack( target ) {
		if( this.equiped !== undefined ) {
			console.log( `${this.name} attaque ${target.name}`)
			let damage = Math.round( ( this.getDamageBase() + this.getAdditionalDamages() ) * this.getDamageBoost() )
			target.receiveDamage( damage )
		}
		else {
			console.log( `${this.name} attaque `)
		}
	}

	receiveDamage( damage ) {
		damage -= this.getShieldValue()
		if( damage > 0 ) {
			console.log( `${this.name} reçoit ${damage} de dégâts` )
			this.hp -= damage
			if( ! this.isAlive() ) {
				console.log( `${this.name} a faillit sous les coups de son adversaire` )
			}
		}
		else {
			console.log( "Aucun effet" )
		}
	}

	getAdditionalDamages() {
		return Math.floor( Math.random() * 2 )
	}

	getDamageBoost() {
		return 1
	}

	getDamageBase() {
		try {
			return this.equiped.getStrength()
		}
		catch( e ) {
			return 0
		}
	}

	getShieldValue() {
		return 0
	}

	isAlive() {
		return this.hp > 0
	}

}

module.exports = Character