<script lang="ts">
  import {X} from "@lucide/svelte";
  import General from "./settinngs/general.svelte";
  import Editer from "./settinngs/editer.svelte";

  let tab = $state(0)
  //0:General
  //1:Editer
</script>

<main class="mx-10">
  <header class="flex items-center bg-base-100 shadow-md p-2">
  <h1>Settings</h1>
  <div class="ml-auto">
    <a href="/" class="btn btn-ghost btn-square"><X /></a>
  </div>
</header>
<div class="flex">
  <ul class="menu bg-base-300 w-56">
    <li><button class="" class:menu-active={tab === 0} onclick={() => (tab = 0)}>General</button></li>
    <li><button class="" class:menu-active={tab === 1} onclick={() => (tab = 1)}>Editer</button></li>
  </ul>
  <div class="bg-base-200 h-[calc(100vh-56px)] w-[calc(100vw-56px)] px-4 py-2 overflow-y-auto">
    {#if tab === 0}
      <General />
    {:else if tab === 1}
      <Editer />
    {/if}
  </div>
</div>
</main>