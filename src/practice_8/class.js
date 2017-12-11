class Class{
	constructor(number) {
		this.number = number;
	}
	getDisplayName() {
		return "Class " + this.number;
	}
	assignLeader(student) {
		if (this.number === student.klass.number) {
			this.leader = student;
		}
	}
}

module.exports = Class

