module.exports = function() {
	let faker = require("faker");
	let _ = require("lodash");

	let dept = [faker.name.jobArea(),faker.name.jobArea(),faker.name.jobArea(),faker.name.jobArea()];
	let arrays = dept.map((d, index) =>
		_.times(5, function(n){
			return {
				id: faker.random.number(),
				name: faker.name.findName(),
				title: faker.name.jobTitle(),
				phone: faker.phone.phoneNumber(),
				email: faker.internet.email(),
				location: faker.address.state(),
				status: faker.random.boolean(),
				role: faker.name.jobType(),
				department: d,
				image: faker.image.dataUri()
			};
		})
	);
	let list = [].concat(...arrays);

	return {
		organization:{
			department: dept,
			personnel: list
		}
	};
};;

/*  *Start server
    > npx json-server generator.js
    
    *Quit server
    > CTRL + c
*/
