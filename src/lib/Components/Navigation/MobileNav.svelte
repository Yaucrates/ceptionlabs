<script lang="ts">
    import { getNavState, navToggle } from "./navLogic.svelte";

    let expanded = $state(false);

    $effect(() => {
        expanded = getNavState();
    })
</script>

<nav class={`transitionHeader ${expanded ? "opacity-100 z-40 expanded" : "opacity-0 z-[-1]"} h-full ${expanded ? 'w-full' : 'w-0'} bg-black/10 backdrop-blur-sm absolute top-0 right-0 transition-all duration-300`}>
    <div class={`${expanded ? "w-full min-[384px]:w-96" : "w-0"} h-full absolute flex items-center justify-center top-0 right-0 bg-neutral-900 shadow-md shadow-neutral-900 transition-all duration-300`}>
        <ul class="text-lg min-[384px]:mr-24 flex flex-col gap-4 text-neutral-300 transition-all">
            <li><a onclick={navToggle} href="/" class="flex gap-2 hover:text-cyan-500 duration-300"><span class="text-cyan-500">1.</span>Home</a></li>
            <li><a onclick={navToggle} href="/services" class="flex gap-2 hover:text-cyan-500 duration-300"><span class="text-cyan-500">2.</span>Services</a></li>
            <li><a onclick={navToggle} href="/portfolio" class="flex gap-2 hover:text-cyan-500 duration-300"><span class="text-cyan-500">3.</span>Portfolio</a></li>
            <li><a onclick={navToggle} href="/contact" class="flex gap-2 hover:text-cyan-500 duration-300"><span class="text-cyan-500">4.</span>Contact</a></li>
        </ul>
    </div>
</nav>
