export enum AppRoute {
	Home = '/',
	About = 'https://ammonite.dev/about',
	Contact = 'https://ammonite.dev/contact',
	Careers = 'https://ammonite.dev/careers',

	TermsOfService = 'https://ammonite.dev/docs/terms_of_service',
	PrivacyPolicy = 'https://ammonite.dev/docs/privacy_policy',

	Docs = '/docs',

	DocsWhyMarkdown = '/docs/why_markdown',
	DocsQuickStart = '/docs/quick_start',

	DocsWebsite101 = '/docs/website_101',
	DocsWebsite101Head = '/docs/website_101/head',
	DocsWebsite101Body = '/docs/website_101/body',

	DocsSyntaxMetadata = '/docs/syntax/metadata',
	DocsSyntaxParagraph = '/docs/syntax/paragraph',
	DocsSyntaxHeading = '/docs/syntax/heading',
	DocsSyntaxBlockquotes = '/docs/syntax/blockquotes',
	DocsSyntaxTemplates = '/docs/syntax/templates',

	DocsTemplates = '/docs/templates',
	DocsTemplatesCustom = '/docs/templates/custom',
	DocsTemplatesBuiltIn = '/docs/templates/built_in',

	DocsTemplatesAmmoniteHead = '/docs/templates/built_in/ammonite_head'
}

export function createAppRoute(route: AppRoute, params: Record<string, string>): string {
	let s: string = route;
	for (const [k, v] of Object.entries(params)) {
		s = s.replaceAll(`:${k}`, v);
	}
	return s;
}
