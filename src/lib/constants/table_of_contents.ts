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
		id: 'template',
		name: 'Templates'
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
			name: 'What makes a website?',
			url: '/docs/what_makes_a_website'
		},
		{
			name: 'Why Markdown?',
			url: '/docs/why_markdown',
			bookmarks: []
		},
		{
			name: 'Quick Start Guide',
			url: '/docs/quick_start',
			bookmarks: []
		}
	],
	syntax: [
		{
			name: 'Metadata',
			url: '/docs/syntax/metadata',
			bookmarks: []
		},
		{
			name: 'Paragraph',
			url: '/docs/syntax/paragraph'
		},
		{
			name: 'Heading',
			url: '/docs/syntax/heading',
			bookmarks: [
				{
					name: 'Heading with anchors',
					url: '#heading_with_anchors'
				}
			]
		},
		{
			name: 'Blockquotes',
			url: '/docs/syntax/blockquotes'
		},
		{
			name: 'Templates',
			url: '/docs/syntax/templates'
		}
	],
	template: [
		{
			name: 'Usage',
			url: '/docs/syntax/templates'
		},
		{
			name: 'Built-in Templates',
			url: '/docs/templates/built_in',
			bookmarks: []
		},
		{
			name: 'Custom Templates',
			url: '/docs/templates/custom',
			bookmarks: []
		}
	]
};
