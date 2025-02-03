// plugins/custom-popup-action/src/server/actions/show-popup.js
const { WorkflowAction } = require('@nocobase/server');

class ShowPopupAction extends WorkflowAction {
	async run(context) {
		const { message, users } = context;
		users.forEach((user) => {
			this.app.emit('show-popup', { user, message });
		});
	}
}

module.exports = ShowPopupAction;
