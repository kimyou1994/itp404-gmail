import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		init() {
			this._super(...arguments);
		},
		star(email, id, newValue) {
			email.set('starred', newValue);
		}
	}
});
