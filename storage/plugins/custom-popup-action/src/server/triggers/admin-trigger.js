// plugins/custom-popup-action/src/server/triggers/admin-trigger.js
const { WorkflowTrigger } = require('@nocobase/server');

class AdminMessageTrigger extends WorkflowTrigger {
	async execute(context) {
		const { message } = context;
		return { message };
	}
}

module.exports = AdminMessageTrigger;
