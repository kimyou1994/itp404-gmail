import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		deleteEmail(model) {
			let confirmed = window.confirm('Are you sure you want to delete this email?');
			if (confirmed) {
				model.destroyRecord();
				this.transitionToRoute('index');
			}
		}
	}
});
