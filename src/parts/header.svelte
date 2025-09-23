<script>
	import { Settings } from '@lucide/svelte';
</script>

<header class=" sticky top-0 flex items-center bg-base-100 drop-shadow pl-2 py-2 z-50 w-full">
	<div class="flex-1 join">
		<div class="dropdown dropdown-hover relative">
			<div tabindex="0" role="button" class="btn btn-sm btn-ghost join-item">File</div>
			<ul class="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-50">
				<li class="join join-vertical w-full">
					<div class="text-primary">Project file</div>
					<div class="border-b-2 w-20"></div>
					<button class="btn btn-ghost join-item">Open</button>
					<button class="btn btn-ghost join-item">Save</button>
				<li class="join join-vertical w-full">
					<div class="text-primary">Open file</div>
					<div class="border-b-2 w-20"></div>
					<button class="btn btn-ghost join-item">.jar file</button>
					<button class="btn btn-ghost join-item">resource pack</button>
					<button class="btn btn-ghost join-item">original lang .json</button>
					<button class="btn btn-ghost join-item">translated lang .json</button>
					<button class="btn btn-ghost join-item">original lang .lang</button>
					<button class="btn btn-ghost join-item">translated lang .lang</button>
				</li>
				<li class="join join-vertical w-full">
					<div class="text-primary">Save file</div>
					<div class="border-b-2 w-20"></div>
					<button class="btn btn-ghost join-item">resource pack</button>
					<button class="btn btn-ghost join-item">original lang .json</button>
					<button class="btn btn-ghost join-item">translated lang .json</button>
					<button class="btn btn-ghost join-item">original lang .lang</button>
					<button class="btn btn-ghost join-item">translated lang .lang</button>
				</li>
			</ul>
		</div>
		<div class="dropdown dropdown-hover relative">
			<div tabindex="0" role="button" class="btn btn-sm btn-ghost join-item">Edit</div>
			<ul class="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-50">
				<li>test</li>
			</ul>
		</div>
	</div>
	<div class="mr-2">
		<a href="/settings" class="btn btn-sm btn-ghost btn-square"><Settings /></a>
	</div>
</header>
