class Class{
	constructor(number) {
		this.number = number;
	}
	getDisplayName() {
		return "Class " + this.number;
	}
	registerJoinListener(teacher) {
		this.joinListener = teacher;
	}
	registerAssignLeaderListener(teacher) {
		this.leaderListener = teacher;
	}
	assignLeader(studentLeader) {
		if (this.number === studentLeader.klass.number) {
			this.leader = studentLeader;
			if (this.leaderListener !== undefined) {
				let result = "I am " + this.leaderListener.name +". I know "+ this.leader.name + " become Leader of Class " + this.number + ".";
				console.log(result);
				return result;
			}
		} else {
			console.log("It is not one of us.");
		}
	}
	appendMember(studentJoiner) {
		studentJoiner.klass = this;
		if (this.joinListener !== undefined) {
			let result = "I am " + this.joinListener.name +". I know "+ studentJoiner.name + " has joined Class " + this.number +".";
			console.log(result);
			return result;
		}
	}
	
}

module.exports = Class




