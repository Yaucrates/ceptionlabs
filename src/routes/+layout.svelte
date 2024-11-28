<script>
    import Footer from "$lib/Components/Navigation/Footer.svelte";
    import Header from "$lib/Components/Navigation/Header.svelte";
    import "../app.css"

    let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
    <Header />
    <div class="mt-[76px] flex-grow relative">
        {@render children()}
    </div>
</div>
<Footer />