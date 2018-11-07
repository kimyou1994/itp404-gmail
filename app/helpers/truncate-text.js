import { helper } from '@ember/component/helper';

export function truncateText(params) {
	console.log(params);
	if (params[1] > params[0].length) {
		return params[0];
	} else {
 	 return params[0].substring(0, params[1]) + '...';
 	}
}

export default helper(truncateText);
