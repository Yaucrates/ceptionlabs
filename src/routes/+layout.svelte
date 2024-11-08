<script>
    import Header from "$lib/Components/Navigation/Header.svelte";
    import "../app.css"
</script>

<div class="h-full flex flex-col">
    <Header />
    <div class="flex-1">
        <slot/>
    </div>
</div>