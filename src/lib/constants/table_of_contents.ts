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
	subsections: Array<SubsectionData>;
};

export const SECTIONS: Array<SectionData> = [
	{
		section: Section.Introduction,
		name: 'Introduction',
		subsections: INTRODUCTION_SECTION
	},
	{
		section: Section.Website101,
		name: 'Website 101',
		subsections: WEBSITE101_SECTION
	},
	{
		section: Section.Syntax,
		name: 'Syntax',
		subsections: SYNTAX_SECTION
	},
	{
		section: Section.Templates,
		name: 'Templates',
		subsections: TEMPLATES_SECTION
	},
	{
		section: Section.BuiltInTemplates,
		name: 'Built-in Templates',
		subsections: BUILTIN_TEMPLATES_SECTION
	}
];
