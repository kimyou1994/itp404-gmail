import Controller from '@ember/controller';

export default Controller.extend({
	starred: false,
	actions: {
		star(newValue) {
			this.set('starred', newValue);
			this.set('model.starred', newValue);
		},
		deleteEmail(model) {
			let confirmed = window.confirm('Are you sure you want to delete this email?');
			if (confirmed) {
				model.destroyRecord();
				this.transitionToRoute('index');
			}
		},

	}
});
