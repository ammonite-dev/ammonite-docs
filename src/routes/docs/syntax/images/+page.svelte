<script>
	import { AppRoute } from '$lib/constants/routes';
</script>

<div class="tech_doc">
	<h1>Images</h1>
	<p>A website won't be complete without some images and graphics for users to view.</p>

	<h4>Example Input</h4>
	<pre><code
			>{`![Tux, the Linux mascot](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis ac consequat turpis. Nullam viverra, neque at cursus
dignissim, quam ligula lacinia diam, vitae ultricies ligula
quam non dui. Morbi volutpat, risus quis aliquam sodales, ante
nisl tempor metus, quis scelerisque diam odio facilisis odio.
Pellentesque luctus metus vitae blandit interdum. Vestibulum
semper turpis felis, et dictum nulla euismod sit amet.
In placerat nulla sed elit consequat fermentum. Proin
vestibulum justo nec metus finibus hendrerit. Duis at
suscipit nunc. Donec molestie ultricies luctus. Nullam vel
imperdiet massa, sed facilisis erat.`}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<img
			src="https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100"
			alt="Tux, the Linux mascot"
		/>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac consequat turpis. Nullam
			viverra, neque at cursus dignissim, quam ligula lacinia diam, vitae ultricies ligula quam non
			dui. Morbi volutpat, risus quis aliquam sodales, ante nisl tempor metus, quis scelerisque diam
			odio facilisis odio. Pellentesque luctus metus vitae blandit interdum. Vestibulum semper
			turpis felis, et dictum nulla euismod sit amet. In placerat nulla sed elit consequat
			fermentum. Proin vestibulum justo nec metus finibus hendrerit. Duis at suscipit nunc. Donec
			molestie ultricies luctus. Nullam vel imperdiet massa, sed facilisis erat.
		</p>
	</div>

	<h2>Advanced Features</h2>
	<p>
		Markdown does not support many features that configures the layout of the document. However,
		there are many features users would like to use with images such as:
	</p>
	<ul>
		<li>Right aligned images</li>
		<li>Resizing images</li>
		<li>Responsive resizing images</li>
	</ul>
	<h3>Solution 1: Write HTML</h3>
	<p>
		One solution to this is to manually write HTML within a Markdown document. Markdown supports
		embedding HTML within a Markdown document.
	</p>
	<h3>Float Images To The Right</h3>
	<h4>Example Input</h4>
	<pre><code
			>{`<img alt="tux" style="float: right;" src="https://mdg.imgix.net/assets/images/tux.png">

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Duis ac consequat turpis. Nullam viverra, neque at cursus
dignissim, quam ligula lacinia diam, vitae ultricies ligula
quam non dui. Morbi volutpat, risus quis aliquam sodales, ante
nisl tempor metus, quis scelerisque diam odio facilisis odio.
Pellentesque luctus metus vitae blandit interdum. Vestibulum
semper turpis felis, et dictum nulla euismod sit amet.
In placerat nulla sed elit consequat fermentum. Proin
vestibulum justo nec metus finibus hendrerit. Duis at
suscipit nunc. Donec molestie ultricies luctus. Nullam vel
imperdiet massa, sed facilisis erat.`}</code
		></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<img src="https://mdg.imgix.net/assets/images/tux.png" alt="tux" style="float: right;" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac consequat turpis. Nullam
			viverra, neque at cursus dignissim, quam ligula lacinia diam, vitae ultricies ligula quam non
			dui. Morbi volutpat, risus quis aliquam sodales, ante nisl tempor metus, quis scelerisque diam
			odio facilisis odio. Pellentesque luctus metus vitae blandit interdum. Vestibulum semper
			turpis felis, et dictum nulla euismod sit amet. In placerat nulla sed elit consequat
			fermentum. Proin vestibulum justo nec metus finibus hendrerit. Duis at suscipit nunc. Donec
			molestie ultricies luctus. Nullam vel imperdiet massa, sed facilisis erat.
		</p>
	</div>

	<h3>Set Image Size</h3>
	<h4>Example Input</h4>
	<pre><code>{`<img alt="tux" style="width: 50%; height: 240px" src="image.jpg">`}</code></pre>
	<h4>Example Output</h4>
	<div class="article_preview">
		<img
			src="https://mdg.imgix.net/assets/images/tux.png"
			alt="tux"
			style="width: 50%; height: 240px"
		/>
	</div>
	<h3>Solution 2: Use Built-in Templates</h3>
	<p>
		Another solution we have created for users with limited programming background is to use the
		built-in collection of templates specifically geared towards images. You can learn more about
		them <a href={AppRoute.DocsTemplatesBuiltIn}>here</a>
	</p>
</div>
