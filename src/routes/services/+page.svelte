<script>
    import MoonlightScene from "$lib/Components/MoonlightScene/MoonlightScene.svelte";
    import TopRightArrow from "$lib/Logos/TopRightArrow.svelte";

</script>
<main class="h-full flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 h-[36rem] md:h-full flex justify-center items-center overflow-clip relative">
        <MoonlightScene />
        <h1 class="text-7xl text-white font-black text-end uppercase bottom-6 right-8 md:bottom-12 md:right-16 absolute z-20">Explore<br/>Our Services</h1>
    </div>
    <div class="w-full md:w-1/2 flex flex-col border-l-0 md:border-l-[1px] border-ception-glassyWhite box-border">
        <div class="p-8 h-[15.5rem] md:h-1/3 flex flex-col justify-between md:border-t-0 border-t-[1px] border-ception-glassyWhite box-border text-white uppercase">
            <h3 class="w-1/2 text-xl font-medium">Maintenance & Hosting Service</h3>
            <div class="w-full flex justify-end items-center gap-4">
                <p class="w-1/2 text-end">Reliable 24/7 hosting and maintenance.</p>
                <TopRightArrow width={60}/>
            </div>
        </div>
        <div class="bg-cyan-900 p-8 h-[15.5rem] md:h-1/3 flex flex-col justify-between text-white uppercase">
            <h3 class="w-3/5 font-bold text-2xl">Web Design & Development Service</h3>
            <div class="w-full flex justify-end items-center gap-4">
                <p class="w-1/2 text-end">Custom design and development to bring your website vision to life.</p>
                <TopRightArrow width={60}/>
            </div>
        </div>
        <div class="p-8 h-[15.5rem] md:h-1/3 flex flex-col justify-between text-white uppercase">
            <h3 class="w-1/2 text-xl font-medium">Additional Services to Meet Your Needs</h3>
            <div class="w-full flex justify-end items-center gap-4">
                <p class="w-1/2 text-end">Comprehensive support for any additional website requirements.</p>
                <TopRightArrow width={60}/>
            </div>
        </div>        
    </div>
</main>