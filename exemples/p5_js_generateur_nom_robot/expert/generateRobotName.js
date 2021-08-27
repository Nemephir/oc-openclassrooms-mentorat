let letters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

/**
 * Generate robot name
 * @param nameSize      Name size length
 * @param prefix        Robot name prefix (ignored when count caracters length)
 * @returns {string}    Generated robot name
 */
let generateRobotName = ( nameSize = 4 , prefix = '' ) => {
	let rst      = prefix

	for( let i = 0 ; i < nameSize ; i++ ) {
		let randomLetter = Math.floor( Math.random() * letters.length )
		rst += letters[randomLetter]
	}

	return rst;
}

module.exports = generateRobotName