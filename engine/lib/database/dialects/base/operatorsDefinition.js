const { OP, JOINS } = require("./OPerators");

const definitions = {
	[OP.eq]: "=",
	[OP.ne]: "!=",
	[OP.gte]: ">=",
	[OP.gt]: ">",
	[OP.lte]: "<=",
	[OP.lt]: "<",
	[OP.not]: "IS NOT",
	[OP.is]: "IS",
	[OP.in]: "IN",
	[OP.notIn]: "NOT IN",
	[OP.like]: "LIKE",
	[OP.notLike]: "NOT LIKE",
	// [OP.iLike]: "ILIKE",
	// [OP.notILike]: "NOT ILIKE",
	[OP.startsWith]: "LIKE",
	[OP.endsWith]: "LIKE",
	[OP.substring]: "LIKE",
	// [OP.regexp]: "~",
	// [OP.notRegexp]: "!~",
	// [OP.iRegexp]: "~*",
	// [OP.notIRegexp]: "!~*",
	[OP.between]: "BETWEEN",
	[OP.notBetween]: "NOT BETWEEN",
	// [OP.overlap]: "&&",
	// [OP.contains]: "@>",
	// [OP.contained]: "<@",
	// [OP.adjacent]: "-|-",
	// [OP.strictLeft]: "<<",
	// [OP.strictRight]: ">>",
	// [OP.noExtendRight]: "&<",
	// [OP.noExtendLeft]: "&>",
	[OP.any]: "ANY",
	[OP.all]: "ALL",
	[OP.and]: "AND",
	[OP.or]: "OR",
	[OP.col]: "COL",
	[OP.join]: "JOIN",
	[OP.innerJoin]: "INNER JOIN",
	[OP.outerJoin]: "OUTER JOIN",
	[OP.leftJoin]: "LEFT JOIN",
	[OP.rightJoin]: "RIGHT JOIN",
	[OP.fullJoin]: "FULL JOIN",
	// [OP.placeholder]: "$$PLACEHOLDER$$",
};

module.exports.OP = OP;
module.exports.DEFINITIONS = definitions;
module.exports.JOINS = JOINS;
