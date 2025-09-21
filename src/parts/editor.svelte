<script lang="ts">
    import { items } from '../data/data.svelte';
    import { edit_now, edit_original, edit_translated } from "../data/edit.svelte";
    $: localEditNow = $edit_now;
    $: localEditOriginal = $edit_original;
    $: localEditTranslated = $edit_translated;

    function saveChanges(){
        if (!localEditNow) return;
        items.update(currentItems => {
            const itemIndex = currentItems.findIndex(item => item.key === localEditNow);
            if (itemIndex !== -1) {
                currentItems[itemIndex].translated = localEditTranslated;
            }
            return currentItems;
        });
    }

    function handleKeydown(event : KeyboardEvent) {
        if (event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            saveChanges();
        }
    }
</script>
<div class="bg-base-200 rounded-lg flex-1 p-4 overflow-y-auto h-[calc(100vh-56px)]">
    <div>
        Key: {localEditNow}
    </div>
    <fieldset class="fieldset">
        <legend class="fieldset-legend block text-sm font-medium mb-1">Original</legend>
        <textarea id="original" class="textarea" bind:value={localEditOriginal} readonly></textarea>
    </fieldset>
    <fieldset class="fieldset">
        <legend class="fieldset-legend block text-sm font-medium mb-1">Translated</legend>
        <textarea id="translated" class="textarea" bind:value={localEditTranslated} onkeydown={handleKeydown}></textarea>
    </fieldset>
    <button class="btn btn-primary" onclick={saveChanges}>Save</button>
</div>