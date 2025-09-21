<script>
	import { Settings } from '@lucide/svelte';
</script>

<header class=" sticky top-0 flex items-center bg-base-100 drop-shadow pl-2 py-2 z-50 w-full">
	<div class="flex-1 join">
		<div class="dropdown dropdown-hover relative">
			<div tabindex="0" role="button" class="btn btn-sm btn-ghost join-item">File</div>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
				<li><button class="btn btn-ghost content-start text-right justify-start">New File</button></li>
				<li><button class="btn btn-ghost content-start text-right justify-start">Open File</button></li>
				<li><button class="btn btn-ghost content-start text-right justify-start">Save File</button></li>
			</ul>
		</div>
		<div class="dropdown dropdown-hover relative">
			<div tabindex="0" role="button" class="btn btn-sm btn-ghost join-item">Edit</div>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
				<li>test</li>
			</ul>
		</div>
	</div>
	<div class="mr-2">
		<a href="/settings" class="btn btn-sm btn-ghost btn-square"><Settings /></a>
	</div>
</header>
