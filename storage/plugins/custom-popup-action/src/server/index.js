// plugins/custom-popup-action/src/server/index.js
const ShowPopupAction = require('./actions/show-popup');
const AdminMessageTrigger = require('./triggers/admin-trigger');
const routes = require('./routes');

module.exports = function (app) {
	app.workflow.registerAction('show-popup', ShowPopupAction);
	app.workflow.registerTrigger('admin-send-message', AdminMessageTrigger);
	routes(app);
};
