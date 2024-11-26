<script>
    import Header from "$lib/Components/Navigation/Header.svelte";
    import "../app.css"
</script>

<div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow relative">
        <slot/>
    </div>
</div>