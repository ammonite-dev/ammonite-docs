<script>
	import { COMPANY_NAME } from '$lib/constants/company';
	import { AppRoute } from '$lib/constants/routes';
</script>

<div class="tech_doc">
	<div
		class="
		text-black
		bg-errorLight
		border-errorDark
		border rounded
		p-4 my-2"
	>
		<div class="font-bold text-xl">Beta Warning</div>
		<div>
			Everything is currently still in development. Many things may change as features are rolled
			out or axed.
		</div>
	</div>
	<h1>Introduction</h1>
	<p>
		Welcome to the Technical Documentation of {COMPANY_NAME}!
	</p>
	<div class="h-4" />
	<p>
		Here we try our best to provide an extensive reference for all the features {COMPANY_NAME} has to
		offer.
	</p>
	<div class="h-4" />
	<p>
		To get started quickly, check out the <a href={AppRoute.DocsQuickStart}>Quick Start Guide</a>
	</p>
	<div class="h-4" />
	<p>
		To get detailed usage cases, check out the <a href={AppRoute.DocsSyntax}>Syntax</a> reference.
	</p>
</div>
