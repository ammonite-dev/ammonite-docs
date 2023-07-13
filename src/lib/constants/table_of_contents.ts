import { AppRoute } from './routes';

export const SECTIONS = [
	{
		id: 'introduction',
		name: 'Introduction'
	},
	{
		id: 'website_101',
		name: 'Website 101'
	},
	{
		id: 'syntax',
		name: 'Syntax'
	},
	{
		id: 'templates',
		name: 'Templates'
	},
	{
		id: 'built_in_templates',
		name: 'Built-in Templates'
	}
];

export type SectionEntry = {
	name: string;
	url: string;
	bookmarks?: Array<SectionEntry>;
};

export const SECTION_ITEMS: Record<string, Array<SectionEntry>> = {
	introduction: [
		{
			name: 'Intro',
			url: AppRoute.Docs
		},
		{
			name: 'Why Markdown?',
			url: AppRoute.DocsWhyMarkdown,
			bookmarks: []
		},
		{
			name: 'Quick Start Guide',
			url: AppRoute.DocsQuickStart,
			bookmarks: []
		}
	],
	website_101: [
		{
			name: 'Intro',
			url: AppRoute.DocsWebsite101
		},
		{
			name: 'head',
			url: AppRoute.DocsWebsite101Head
		},
		{
			name: 'body',
			url: AppRoute.DocsWebsite101Body
		}
	],
	syntax: [
		{
			name: 'Metadata',
			url: AppRoute.DocsSyntaxMetadata,
			bookmarks: []
		},
		{
			name: 'Paragraph',
			url: AppRoute.DocsSyntaxParagraph
		},
		{
			name: 'Heading',
			url: AppRoute.DocsSyntaxHeading,
			bookmarks: [
				{
					name: 'Heading with anchors',
					url: '#heading_with_anchors'
				}
			]
		},
		{
			name: 'Blockquotes',
			url: AppRoute.DocsSyntaxBlockquotes
		},
		{
			name: 'Templates',
			url: AppRoute.DocsSyntaxTemplates
		}
	],
	templates: [
		{
			name: 'Intro',
			url: AppRoute.DocsTemplates
		},
		{
			name: 'Custom Templates',
			url: AppRoute.DocsTemplatesCustom,
			bookmarks: []
		}
	],
	built_in_templates: [
		{
			name: 'Intro',
			url: AppRoute.DocsTemplatesBuiltIn,
			bookmarks: []
		},
		{
			name: 'ammonite_head',
			url: AppRoute.DocsTemplatesAmmoniteHead,
			bookmarks: []
		}
	]
};
