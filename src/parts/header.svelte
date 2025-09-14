<script>
	import { Settings } from '@lucide/svelte';
</script>

<header class="flex items-center bg-base-100 shadow-md pl-2 py-2">
	<div class="flex-1 join">
		<div class="dropdown dropdown-hover">
			<div tabindex="0" role="button" class="btn btn-sm btn-ghost join-item">File</div>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<li>test</li>
			</ul>
		</div>
		<div class="dropdown dropdown-hover">
			<div tabindex="0" role="button" class="btn btn-sm btn-ghost join-item">Edit</div>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<li>test</li>
			</ul>
		</div>
	</div>
	<div class="mr-2">
		<a href="/settings" class="btn btn-sm btn-ghost btn-square"><Settings /></a>
	</div>
</header>
