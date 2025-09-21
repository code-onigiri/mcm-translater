<script>
	import { search, filter, regex } from '../data/list.svelte';
	import { Search, Regex , TextSearch } from '@lucide/svelte';


	//debug
	// $: console.log(`Search: ${$search}, Filter: ${$filter}, Regex: ${$regex}`);
</script>

<div>
	<div class="flex">
		<label class="input w-full m-1">
			<Search />
			<input id="search" type="search" required placeholder="Search" bind:value={$search} />
		</label>
		<label class="btn swap swap-rotate rounded-sm bg-base-100 h-10 w-10 m-1">
			<input type="checkbox" class="" bind:checked={$regex} />
			<Regex  class="swap-on fill-current" />
			<TextSearch  class="swap-off fill-current" />
		</label>
	</div>
	<div class="tabs tabs-lift tabs-sm w-full">
		<input
			type="radio"
			id="tab_all"
			name="filter_tabs"
			class="tab flex-1"
			aria-label="all"
			value="all"
			bind:group={$filter}
		/>
		<input
			type="radio"
			id="tab_translated"
			name="filter_tabs"
			class="tab flex-1"
			aria-label="translated"
			value="translated"
			bind:group={$filter}
		/>
		<input
			type="radio"
			id="tab_untranslated"
			name="filter_tabs"
			class="tab flex-1"
			aria-label="untranslated"
			value="untranslated"
			bind:group={$filter}
		/>
	</div>
</div>
