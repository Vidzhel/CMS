const OPId = {
	eq: Symbol("eq"),
	ne: Symbol("ne"),
	gte: Symbol("gte"),
	gt: Symbol("gt"),
	lte: Symbol("lte"),
	lt: Symbol("lt"),
	not: Symbol("not"),

	is: Symbol("is"),
	in: Symbol("in"),

	notIn: Symbol("notIn"),
	like: Symbol("like"),
	// notLike: Symbol("notLike"),
	// iLike: Symbol("iLike"),
	notILike: Symbol("notILike"),
	startsWith: Symbol("startsWith"),
	endsWith: Symbol("endsWith"),
	substring: Symbol("substring"),
	regexp: Symbol("regexp"),
	// notRegexp: Symbol("notRegexp"),
	// iRegexp: Symbol("iRegexp"),
	// notIRegexp: Symbol("notIRegexp"),
	between: Symbol("between"),
	notBetween: Symbol("notBetween"),
	overlap: Symbol("overlap"),
	// contains: Symbol("contains"),
	// contained: Symbol("contained"),
	// adjacent: Symbol("adjacent"),
	// strictLeft: Symbol("strictLeft"),
	// strictRight: Symbol("strictRight"),
	// noExtendRight: Symbol("noExtendRight"),
	// noExtendLeft: Symbol("noExtendLeft"),
	and: Symbol("and"),
	or: Symbol("or"),
	any: Symbol("any"),
	all: Symbol("all"),
	values: Symbol("values"),
	col: Symbol("col"),
	// placeholder: Symbol("placeholder"),
	join: Symbol("join"),
	innerJoin: Symbol("innerJoin"),
	outerJoin: Symbol("outerJoin"),
	leftJoin: Symbol("leftJoin"),
	rightJoin: Symbol("rightJoin"),
	fullJoin: Symbol("fullJoin"),
};

const JOINS = [
	OpIds.join,
	OpIds.fullJoin,
	OpIds.innerJoin,
	OpIds.leftJoin,
	OpIds.rightJoin,
	OpIds.outerJoin,
];

module.exports.OP = OPId;
module.exports.JOINS = JOINS;
