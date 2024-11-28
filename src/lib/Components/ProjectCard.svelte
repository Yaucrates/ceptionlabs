<script lang="ts">
    let {
        title,
        subtitle,
        description,
        href = null,
        src,
        target = "_blank",
    }: {
        title: string,
        subtitle: string,
        description: string,
        href?: string | null,
        src: string,
        target?: string,
    } = $props();
</script>

<a {href} {target} class="whiteBorderGradient p-px w-[42rem] h-fit min-[400px]:h-96 rounded-3xl group">
    <div class="w-full h-full p-8 bg-neutral-900 group-hover:bg-cyan-900 rounded-3xl relative overflow-hidden transition-colors duration-500">
        <div class="flex justify-between">
            <h1 class="text-2xl font-bold text-white">{title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" class={`${href ? "" : "hidden"} group-hover:translate-x-3 transition-all duration-300`} width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
            </svg>
        </div>
        <p class="text-sm text-neutral-400"><span class="text-neutral-300">{subtitle}</span> -- {description}</p>
        <div class="w-full h-full hidden min-[400px]:flex justify-center relative">
            <img {src} class="h-5/6 translate-y-8 group-hover:translate-y-0 transition-all duration-300 absolute bottom-0" alt="alt"/>
        </div>
    </div>
</a>

<style>
    .whiteBorderGradient {
        background: radial-gradient(circle at top center, rgb(160, 160, 160) 0%, rgb(38, 38, 38) 50%);
    }
</style>