<script lang="ts">
    import RightArrow from "$lib/Logos/RightArrow.svelte";
    import { page } from "$app/stores";

    let { expanded, navToggle }: { expanded: boolean, navToggle: () => void } = $props();
</script>

<nav class="z-50 {expanded ? "opacity-100 translate-x-0" : "opacity-0 translate-y-10 translate-x-96 -rotate-6"} w-60 xs:w-80 flex flex-col absolute top-14 right-0 rounded-lg transition-all duration-500 bg-neutral-900">
    <a href="/" onclick={navToggle} class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/" && "bg-cyan-700"}">
        Home
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
    <a href="/services" onclick={navToggle} class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/services" && "bg-cyan-700"}">
        Services
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
    <a href="/portfolio" onclick={navToggle} class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/portfolio" && "bg-cyan-700"}">
        Portfolio
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
    <a href="/contact" onclick={navToggle} class="px-8 py-4 flex justify-between items-center w-full uppercase text-white text-2xl font-bold group rounded-lg {$page.url.pathname === "/contact" && "bg-cyan-700"}">
        Contact
        <RightArrow width={50} tw="stroke-white opacity-0 group-hover:opacity-100 group-hover:rotate-[360deg] transition-all duration-300" />
    </a>
</nav>