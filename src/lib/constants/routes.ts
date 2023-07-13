export enum AppRoute {
	Home = '/',
	About = 'https://ammonite.dev/about',
	Contact = 'https://ammonite.dev/contact',
	Careers = 'https://ammonite.dev/careers',

	TermsOfService = 'https://ammonite.dev/docs/terms_of_service',
	PrivacyPolicy = 'https://ammonite.dev/docs/privacy_policy'
}

export function createAppRoute(route: AppRoute, params: Record<string, string>): string {
	let s: string = route;
	for (const [k, v] of Object.entries(params)) {
		s = s.replaceAll(`:${k}`, v);
	}
	return s;
}
