import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

export function code_to_html(language: string, s: string): string {
	return hljs.highlight(s, { language }).value;
}
