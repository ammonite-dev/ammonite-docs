<div class="tech_doc">
	<h1>Lists</h1>
	<p>We can organize data into ordered or unordered lists</p>

	<h2>Unordered Lists</h2>

	<h4>Example Input</h4>
	<pre><code
			>{`- Milk
- Cheese
  - Blue variety`}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<ul>
			<li>Milk</li>
			<li>
				Cheese
				<ul>
					<li>Blue variety</li>
				</ul>
			</li>
		</ul>
	</div>

	<h2>Ordered List</h2>
	<h4>Example Input</h4>
	<pre><code
			>{`1. Eggs
  1. Is it green?
  2. Sam I am.
2. Ham`}</code
		></pre>

	<h4>Example Output</h4>
	<div class="article_preview">
		<ol>
			<li>
				Eggs
				<ol>
					<li>Is it green?</li>
					<li>Sam I am.</li>
				</ol>
			</li>
			<li>Ham</li>
		</ol>
	</div>

	<h2>Mixing Lists</h2>
	<h4>Example Input</h4>
	<pre><code
			>{`1. Eggs
  - Is it green?
  - Sam I am.
2. Ham`}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<ol>
			<li>
				Eggs
				<ul>
					<li>Is it green?</li>
					<li>Sam I am.</li>
				</ul>
			</li>
			<li>Ham</li>
		</ol>
	</div>
</div>
