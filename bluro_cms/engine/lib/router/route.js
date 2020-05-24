"use strict";
const Rule = require("./rule");

class Route extends Rule {
	define(methods, handler, options) {
		if (typeof handler !== "function") {
			throw new Error("Expected function, got " + typeof handler);
		}

		this._addHandler(methods, handler);
		this._options = options;
	}

	_addToMethod(method, handler) {
		this._handlers[method] = handler;
	}

	async dispatch(req, res, data) {
		const method = req.method;
		const handler = this._handlers[method];
		const temp = Object.assign({}, this._options);
		data = Object.assign(temp, data);

		await handler(req, res, data);
	}
}

module.exports = Route;
