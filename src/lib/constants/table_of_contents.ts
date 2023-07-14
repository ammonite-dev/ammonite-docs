import { AppRoute } from './routes';
import {
	BUILTIN_TEMPLATES_SECTION,
	INTRODUCTION_SECTION,
	SYNTAX_SECTION,
	TEMPLATES_SECTION,
	WEBSITE101_SECTION,
	type SubsectionData
} from './sections';

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

export const SECTIONS: Array<SectionData> = [
	{
		section: Section.Introduction,
		name: 'Introduction',
		url: AppRoute.Docs,
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
