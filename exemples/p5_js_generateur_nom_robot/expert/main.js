let generateRobotName = require('./generateRobotName')

console.table([
	generateRobotName(),
	generateRobotName( 4 , "ROBOT_"),
	generateRobotName(20),
	generateRobotName( 6, generateRobotName(2) + '_' ),
])