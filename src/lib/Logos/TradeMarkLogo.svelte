<script lang="ts">
    const { width, height, tw }: { width?: number, height?: number, tw?: string }  = $props();
</script>

<svg {width} {height} viewBox="0 0 24 24" class={`${tw} icon icon-tabler icons-tabler-filled icon-tabler-badge-tm`}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3zm-9 4h-4a1 1 0 1 0 0 2h1v5a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-5h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1m8 1c0 -.99 -1.283 -1.378 -1.832 -.555l-1.168 1.752l-1.168 -1.752c-.549 -.823 -1.832 -.434 -1.832 .555v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-2.697l.168 .252l.08 .104a1 1 0 0 0 1.584 -.104l.168 -.253v2.698a1 1 0 0 0 2 0z" />
</svg>