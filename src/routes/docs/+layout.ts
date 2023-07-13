import type { LayoutData, LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, depends }): LayoutData => {
	return {
		params
	};
};
