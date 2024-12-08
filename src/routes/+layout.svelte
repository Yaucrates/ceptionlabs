<script>
    import Footer from "$lib/Components/Navigation/Footer.svelte";
    import Header from "$lib/Components/Navigation/Header.svelte";
    import "../app.css"

    let { children } = $props();
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col">
    <Header />
    <div class="mt-[76px] flex-grow relative">
        {@render children()}
    </div>
</div>
<Footer />