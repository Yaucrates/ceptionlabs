<script>
    import MoonlightScene from "$lib/Components/MoonlightScene/MoonlightScene.svelte";
    import TopRightArrow from "$lib/Logos/TopRightArrow.svelte";
</script>

<main class="lg:h-[calc(100vh-76px)] flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 min-h-[36rem] h-[36rem] lg:h-full lg:min-h-full border-t-[1px] border-neutral-800 flex justify-center items-center overflow-clip relative">
        <MoonlightScene />
        <h1 class="text-5xl min-[500px]:text-6xl sm:text-7xl text-white font-black text-end uppercase bottom-6 right-8 lg:bottom-12 lg:right-16 absolute z-20">Explore<br/>Our Services</h1>
    </div>
    <div class="w-full lg:w-1/2 flex flex-col border-t-[1px] border-l-0 lg:border-l-[1px] border-ception-glassyWhite box-border">
        <div class="p-8 min-h-[15.5rem] lg:min-h-0 lg:h-1/3 gap-4 flex flex-col justify-between lg:border-t-0 border-t-[1px] border-ception-glassyWhite box-border text-white uppercase">
            <h3 class="text-xl font-medium">Maintenance & Hosting<br/>Service</h3>
            <div class="w-full flex justify-end items-center gap-4">
                <p class="text-end">Reliable 24/7 hosting and <br class="hidden min-[460px]:block"/>maintenance.</p>
                <div class="min-w-[60px] min-h-[60px] flex items-center justify-center">
                    <TopRightArrow width={60} />
                </div>
            </div>
        </div>
        <div class="bg-cyan-900 p-8 min-h-[15.5rem] lg:min-h-0 lg:h-1/3 gap-4 flex flex-col justify-between text-white uppercase">
            <h3 class="font-bold text-2xl">Web Design & Development<br/>Service</h3>
            <div class="w-full flex justify-end items-center gap-4">
                <p class="text-end">Custom design and development to <br class="hidden min-[460px]:block"/>bring your website vision to life.</p>
                <div class="min-w-[60px] min-h-[60px] flex items-center justify-center">
                    <TopRightArrow width={60} />
                </div>
            </div>
        </div>
        <div class="p-8 min-h-[15.5rem] lg:min-h-0 lg:h-1/3 gap-4 flex flex-col justify-between text-white uppercase">
            <h3 class="text-xl font-medium">Additional Services to Meet<br/>Your Needs</h3>
            <div class="w-full flex justify-end items-center gap-4">
                <p class="text-end">Comprehensive support for any <br class="hidden min-[460px]:block"/>additional website requirements.</p>
                <div class="min-w-[60px] min-h-[60px] flex items-center justify-center">
                    <TopRightArrow width={60} />
                </div>
            </div>
        </div>
    </div>
</main>