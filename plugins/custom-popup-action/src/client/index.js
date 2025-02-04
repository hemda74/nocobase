// plugins/custom-popup-action/src/client/index.js
export default function (app) {
	app.on('show-popup', ({ user, message }) => {
		app.dialog.alert({
			title: 'رسالة جديدة',
			content: message,
		});
	});

	app.pluginSettingsManager.add('custom-popup-action', {
		title: 'إرسال رسالة',
		component: () => {
			const [message, setMessage] = React.useState('');
			return (
				<div>
					<input
						type="text"
						value={message}
						onChange={(e) =>
							setMessage(
								e.target.value
							)
						}
						placeholder="اكتب الرسالة هنا..."
					/>
					<button
						onClick={() => {
							app.api.post(
								'/workflows:trigger',
								{
									trigger: 'admin-send-message',
									data: {
										message,
									},
								}
							);
						}}
					>
						إرسال للجميع
					</button>
				</div>
			);
		},
	});
}
