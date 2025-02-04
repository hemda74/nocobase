// plugins/custom-popup-action/src/server/routes.js
module.exports = function (app) {
	app.router.post('/workflows:trigger', async (ctx) => {
		const { trigger, data } = ctx.request.body;
		await app.workflow.trigger(trigger, data);
		ctx.body = { success: true };
	});
};
