import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	starred: false,
	actions: {
		star(email, id, newValue) {
			email.set('starred', newValue);
		}
	},
	matched: computed('starSelected', "email.starred", function() {
		let match = this.starSelected == this.email.starred;
		return match;
	})
});
