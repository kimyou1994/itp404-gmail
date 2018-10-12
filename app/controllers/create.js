import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		createEmail(event) {
			event.preventDefault();
			console.log(this.from);
			let email = this.store.createRecord('email', {
				from: this.from,
				to: this.to,
				subject: this.subject,
				message: this.message
			});
			email.save().then(() => {
				this.transitionToRoute('index');
			});
		}
	}
});
