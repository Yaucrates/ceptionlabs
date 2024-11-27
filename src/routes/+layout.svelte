<script>
    import Footer from "$lib/Components/Navigation/Footer.svelte";
import Header from "$lib/Components/Navigation/Header.svelte";
    let { children } = $props();
    import "../app.css"
</script>

<div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow relative">
        {@render children()}
    </div>
</div>
<Footer />