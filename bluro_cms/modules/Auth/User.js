const Model = DependencyResolver.getDependency(null, "Model");
const USER_ROLES = {
	ADMIN: "ADMIN",
	USER: "USER",
	GUEST: "GUEST",
};

class User extends Model {
	static ROLES = USER_ROLES;
}

User.init([
	{
		columnName: "userName",
		type: Model.DATA_TYPES.VARCHAR(10),
	},
	{
		columnName: "blogName",
		type: Model.DATA_TYPES.VARCHAR(20),
	},
	{
		columnName: "email",
		type: Model.DATA_TYPES.VARCHAR(20),
	},
	{
		columnName: "password",
		type: Model.DATA_TYPES.VARCHAR(10),
	},
	{
		columnName: "role",
		type: Model.DATA_TYPES.VARCHAR(10),
		default: USER_ROLES.USER,
		validators: [validateRole],
	},
]);

function validateRole(newVal) {
	return {
		fail: !Object.values(USER_ROLES).includes(newVal),
		description: `ADMIN, USER or GUEST have to be specified, got ${newVal}`,
	};
}

module.exports = User;
