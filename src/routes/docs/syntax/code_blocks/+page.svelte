<div class="tech_doc">
	<h1>Codeblocks</h1>
	<p>
		Sometimes we want to show users a code snippet or just don't want it to be interpreted as
		Markdown.
	</p>

	<h2>Inline Code</h2>

	<h4>Example Input</h4>
	<pre><code>{`By calling the function \`myFunction(a, b, c);\`, we can get our answer.`}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<p>
			By calling the function
			<span class="inline_code">myFunction(a, b, c);</span>
			, we can get our answer.
		</p>
	</div>

	<h2>Code Block</h2>
	<h4>Example Input</h4>
	<pre><code
			>{`In order to use Ammonite's templates, you must specify
a code block that is prefixed with \`ammonite_template\`.

\`\`\`ammonite_template
{
	"version": 1,
	"template": "/ammonite/header_with_anchor",
	"data": {}
}
\`\`\``}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<p>
			In order to use Ammonite's templates, you must specify a code block that is prefixed with <span
				class="inline_code">ammonite_template</span
			>.
		</p>
		<pre><code
				>{`ammonite_template
{
	"version": 1,
	"template": "/ammonite/header_with_anchor",
	"data": {}
}`}</code
			></pre>
	</div>
	<p>
		Certain characters can't be written normally because they conflict with the Markdown syntax. In
		order to fix this, we can escape these characters using
		<span class="inline_code">\</span>
	</p>
	<table>
		<thead>
			<tr>
				<th>Character</th>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>\</td>
				<td>backslash</td>
			</tr>
			<tr>
				<td>`</td>
				<td>backtick</td>
			</tr>
			<tr>
				<td>*</td>
				<td>asterisk</td>
			</tr>
			<tr>
				<td>_</td>
				<td>underscore</td>
			</tr>
			<tr>
				<td>{`{ }`}</td>
				<td>curly braces</td>
			</tr>
			<tr>
				<td>[ ]</td>
				<td>brackets</td>
			</tr>
			<tr>
				<td>&lt; &gt;</td>
				<td>angle brackets</td>
			</tr>
			<tr>
				<td>( )</td>
				<td>parentheses</td>
			</tr>
			<tr>
				<td>#</td>
				<td>pound sign</td>
			</tr>
			<tr>
				<td>+</td>
				<td>plus sign</td>
			</tr>
			<tr>
				<td>-</td>
				<td>minus sign</td>
			</tr>
			<tr>
				<td>.</td>
				<td>dot</td>
			</tr>
			<tr>
				<td>!</td>
				<td>exclamation mark</td>
			</tr>
			<tr>
				<td>|</td>
				<td>pipe</td>
			</tr>
		</tbody>
	</table>
	<h4>Example Input</h4>
	<pre><code
			>{`\`\`\`
const myVariable = \\\`$\{myOtherVariable\}\\\\n\\\`;
\`\`\``}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<pre><code>{`const myVariable = \`$\{myOtherVariable\}\\n\`;`}</code></pre>
	</div>
</div>
