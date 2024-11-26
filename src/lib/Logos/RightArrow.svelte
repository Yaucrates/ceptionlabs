<script lang="ts">
    const { width, height, tw }: { width?: number, height?: number, tw?: string }  = $props();
</script>

<svg {width} {height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class={`fill-none stroke-2 ${tw}`}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
    <path d="M15 16l4 -4" />
    <path d="M15 8l4 4" />
</svg>