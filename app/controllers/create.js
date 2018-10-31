import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		createEmail(event) {
			event.preventDefault();
			let email = this.store.createRecord('email', {
				from: this.from,
				to: this.to,
				subject: this.subject,
				message: this.message,
				starred: false
			});
			email.save().then(() => {
				this.transitionToRoute('index');
			});
		}
	}
});
