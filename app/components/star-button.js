import Component from '@ember/component';

export default Component.extend({
	actions: {
		click() {
			this.onClick(!this.starred);
		}
	}
});
