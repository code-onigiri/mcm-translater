<script lang="ts">
	import { filteredItems } from '../data/data.svelte';
	import { edit_now, edit_original, edit_translated } from "../data/edit.svelte";
	import Search from "./search.svelte"; 

	function selectItem(key: string, original: string, translated: string) {
		edit_now.set(key);
		edit_original.set(original);
		edit_translated.set(translated);
	}
</script>

<div class=" h-[calc(100vh-56px)] w-56 mt-56px" style="scrollbar-width: none;">
	<Search />
	<div class="list overflow-y-auto h-[calc(100vh-136px)]" style="scrollbar-width: none;">
		{#each $filteredItems as { key, original, translated }, index (key)}
		<button class={`pb-2 px-2 justify-items-start ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`} aria-label={`Select item ${key}`} onclick={()=>{selectItem(key, original, translated)}}>
			<h2 class="font-bold">{key}</h2>
			<div><span class=" text-primary">Original: </span>{original}</div>
			<div><span class=" text-secondary">Translated: </span>{translated}</div>
		</button>
	{/each}
	</div>
</div>
