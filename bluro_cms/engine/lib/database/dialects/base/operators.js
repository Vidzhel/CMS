const OPId = {
	eq: "eq",
	ne: "ne",
	gte: "gte",
	gt: "gt",
	lte: "lte",
	lt: "lt",
	not: "not",

	is: "is",
	in: "in",

	notIn: "notIn",
	like: "like",
	// notLike: Symbol("notLike"),
	// iLike: Symbol("iLike"),
	notILike: "notILike",
	startsWith: "startsWith",
	endsWith: "endsWith",
	substring: "substring",
	regexp: "regexp",
	// notRegexp: Symbol("notRegexp"),
	// iRegexp: Symbol("iRegexp"),
	// notIRegexp: Symbol("notIRegexp"),
	between: "between",
	notBetween: "notBetween",
	// overlap: "overlap",
	// contains: Symbol("contains"),
	// contained: Symbol("contained"),
	// adjacent: Symbol("adjacent"),
	// strictLeft: Symbol("strictLeft"),
	// strictRight: Symbol("strictRight"),
	// noExtendRight: Symbol("noExtendRight"),
	// noExtendLeft: Symbol("noExtendLeft"),
	and: "and",
	or: "or",
	// any: Symbol("any"),
	// all: Symbol("all"),
	// values: Symbol("values"),
	// col: Symbol("col"),
	// placeholder: Symbol("placeholder"),
	// join: Symbol("join"),
	// innerJoin: Symbol("innerJoin"),
	// outerJoin: Symbol("outerJoin"),
	// leftJoin: Symbol("leftJoin"),
	// rightJoin: Symbol("rightJoin"),
	// fullJoin: Symbol("fullJoin"),
	SET_NULL: "SET_NULL",
	RESTRICT: "RESTRICT",
	NO_ACTION: "NO_ACTION",
	SET_DEFAULT: "SET_DEFAULT",
	CASCADE: "CASCADE",
};

module.exports = OPId;
