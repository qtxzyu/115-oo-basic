var Person = require("../../src/practice_11/person.js");
class Teacher extends Person {
	constructor(id, name, age, klasses) {
		super(id,name,age);
		this.klasses = klasses;
	}
	
	introduce() {
		if (this.klasses == undefined) {
			return super.introduce() + " I am a Teacher. I teach No Class.";
		}
		let classnumber = '';
		this.klasses.map((item, index, array) => {
			if (index !== array.length - 1) {
				classnumber += item.number;
				classnumber += ", ";
			} else {
				classnumber += item.number;
			}
		});
		return super.introduce() + " I am a Teacher. I teach Class " + classnumber +".";
	}
	
	introduceWith(student) {
		if (student.klass.number === this.klass.number) {
			return super.introduce() + " I am a Teacher. I teach " + student.name + ".";
		} 
		return super.introduce() + " I am a Teacher. I don't teach " + student.name + ".";
	}
	isTeaching(student) {
		return isIn(student);
	}
	isIn(student) {
		let result = false;
		this.klasses.map((item) => {
			if(item.number === student.klass.number) {
				result = true;
				break;
			}
		});
	}
}

module.exports = Teacher











