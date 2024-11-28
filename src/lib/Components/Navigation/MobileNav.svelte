<script lang="ts">
    import RightArrow from "$lib/Logos/RightArrow.svelte";
    import { page } from "$app/stores";

    let { expanded }: { expanded: boolean } = $props();
</script>

<nav class={`${expanded ? "opacity-100 translate-x-0" : "opacity-0 translate-y-10 rotate-3"} w-80 flex flex-col absolute top-14 right-0 rounded-lg transition-all duration-300 bg-neutral-900`}>
    <a href="/about" class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/about" && "bg-cyan-700"}">
        About
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
    <a href="/services" class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/services" && "bg-cyan-700"}">
        Services
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
    <a href="/portfolio" class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/portfolio" && "bg-cyan-700"}">
        Portfolio
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
    <a href="/contact" class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/contact" && "bg-cyan-700"}">
        Contact
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
</nav>