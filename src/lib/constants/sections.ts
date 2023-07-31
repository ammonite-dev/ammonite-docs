import { AppRoute } from './routes';

export type SubsectionData = {
	name: string;
	url: string;
	bookmarks?: Array<SubsectionData>;
};

export enum Section {
	Introduction,
	Website101,
	Syntax,
	Templates,
	BuiltInTemplates
}

export type SectionData = {
	section: Section;
	name: string;
	url?: string;
	subsections: Array<SubsectionData>;
};

export const INTRODUCTION_SECTION: Array<SubsectionData> = [
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
];

export const WEBSITE101_SECTION: Array<SubsectionData> = [
	{
		name: 'head',
		url: AppRoute.DocsWebsite101Head
	},
	{
		name: 'body',
		url: AppRoute.DocsWebsite101Body
	}
];

export const SYNTAX_SECTION: Array<SubsectionData> = [
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
		url: AppRoute.DocsSyntaxHeadings,
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
		name: 'Lists',
		url: AppRoute.DocsSyntaxLists
	},
	{
		name: 'Code Blocks',
		url: AppRoute.DocsSyntaxCodeBlocks
	},
	{
		name: 'Images',
		url: AppRoute.DocsSyntaxImages
	},
	{
		name: 'Links',
		url: AppRoute.DocsSyntaxLinks
	},
	{
		name: 'Tables',
		url: AppRoute.DocsSyntaxTable
	},
	{
		name: 'Raw HTML',
		url: AppRoute.DocsSyntaxRawHTML
	}
];

export const TEMPLATES_SECTION: Array<SubsectionData> = [
	{
		name: 'Syntax',
		url: AppRoute.DocsTemplatesSyntax
	},
	{
		name: 'Custom Templates',
		url: AppRoute.DocsTemplatesCustom,
		bookmarks: []
	}
];

export const BUILTIN_TEMPLATES_SECTION: Array<SubsectionData> = [
	{
		name: 'head_with_anchor',
		url: AppRoute.DocsTemplatesAnchoredHeading,
		bookmarks: []
	}
];

export const SECTIONS: Array<SectionData> = [
	{
		section: Section.Introduction,
		name: 'Introduction',
		url: AppRoute.DocsHome,
		subsections: INTRODUCTION_SECTION
	},
	{
		section: Section.Website101,
		name: 'Website 101',
		url: AppRoute.DocsWebsite101,
		subsections: WEBSITE101_SECTION
	},
	{
		section: Section.Syntax,
		name: 'Syntax',
		url: AppRoute.DocsSyntax,
		subsections: SYNTAX_SECTION
	},
	{
		section: Section.Templates,
		name: 'Templates',
		url: AppRoute.DocsTemplates,
		subsections: TEMPLATES_SECTION
	},
	{
		section: Section.BuiltInTemplates,
		name: 'Built-in Templates',
		url: AppRoute.DocsTemplatesBuiltIn,
		subsections: BUILTIN_TEMPLATES_SECTION
	}
];
