<script>
    import PortfolioSlider from "$lib/Components/PortfolioSlider.svelte";
    import MoneyLogo from "$lib/Logos/MoneyLogo.svelte";
    import SearchLogo from "$lib/Logos/SearchLogo.svelte";
    import TradeMarkLogo from "$lib/Logos/TradeMarkLogo.svelte";
</script>

<div class="gap-10 flex flex-col relative">
    <div class="lg:px-20 pt-24 h-firstpage min-[570px]:pb-80 md:pb-96 gap-12 sm:gap-0 flex flex-col sm:flex-row justify-center min-[570px]:justify-around items-center">
        <h1 class="w-2/3 sm:w-5/12 text-white text-5xl lg:text-6xl font-semibold">
            Web Design
            and Development
            you can rely on.
        </h1>
        <div class="w-2/3 sm:w-1/3 gap-4 flex flex-col">
            <p class="text-neutral-200 text-xl">
                Whether the goal is to increase sales, build brand awareness, or
                provide valuable information to your audience, Ception's here to
                help you achieve success!
            </p>
            <a href="/services" class="w-fit py-2 px-4 text-white text-lg font-medium bg-red-700 transition-colors duration-300 z-10 rounded-t-full rounded-r-full">Check Us Out</a>
        </div>
    </div>
    
    <div class="hidden min-[570px]:block w-full absolute -bottom-24 md:-bottom-56 right-10 lg:right-20">
        <PortfolioSlider />
    </div>
</div>

<div class="bg-neutral-950 h-[70rem] pt-40 min-[570px]:pt-80">
    <div class="px-20 gap-4 flex flex-col">
        <h1 class="text-4xl font-black uppercase text-white">Why do you <span class="text-orange-500">need</span> a website?</h1>
        <p class="w-full md:w-5/6 lg:w-2/3 text-xl text-neutral-300">
            If you want to increase your revenue, you need a website. It's that simple.
            Potential customers find businesses online, and if you're not there,
            they'll find someone else who is.
        </p>
    </div>
    <div class="min-[1200px]:px-20 py-20 gap-4 flex justify-between items-center overflow-x-auto min-[1200px]:overflow-hidden relative">
        <div class="w-16 h-[26rem] shrink-0 block min-[1200px]:hidden"></div>

        <a class="w-[20rem] h-[26rem] px-6 py-8 border-2 border-neutral-900 shrink-0 gap-2 flex flex-col relative group" target="_blank" href="https://www.prnewswire.com/news-releases/half-of-consumers-consider-a-companys-website-design-crucial-to-their-opinion-of-that-brand-301274695.html">
            <h3 class="text-lg text-white font-semibold uppercase">Brand:</h3>
            <p class="text-white">
                <span class="text-ception-cyan">50%</span>
                of people say that their impression of a business
                <span class="text-ception-cyan">depends</span>
                on the company’s website design.
            </p>
            <div class="grow flex justify-center items-center">
                <TradeMarkLogo width={200} tw="fill-white group-hover:fill-orange-500 transition-colors duraiton-300" />
            </div>
        </a>

        <a class="w-[20rem] h-[26rem] px-6 py-8 border-2 border-neutral-900 shrink-0 gap-2 flex flex-col relative group" target="_blank" href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/">
            <h3 class="text-lg text-white font-semibold uppercase">Conversion:</h3>
            <p class="text-white">
                <span class="text-ception-cyan">53%</span>
                of visits are
                <span class="text-ception-cyan">abandoned</span>
                if a mobile site takes longer than
                <span class="text-ception-cyan">3 seconds</span>
                to load.
            </p>
            <div class="grow flex justify-center items-center">
                <MoneyLogo width={200} tw="fill-none stroke-white group-hover:stroke-orange-500 stroke-2 transition-colors duration-300" />
            </div>
        </a>

        <a class="w-[20rem] h-[26rem] px-6 py-8 border-2 border-neutral-900 shrink-0 gap-2 flex flex-col relative group" target="_blank" href="https://www.prnewswire.com/news-releases/76-of-consumers-look-at-online-presence-before-physically-visiting-a-business-301272462.html">
            <h3 class="text-lg text-white font-semibold uppercase">Discoverability:</h3>
            <p class="text-white">
                <span class="text-ception-cyan">76%</span>
                of people find businesses online
                <span class="text-ception-cyan">BEFORE</span>
                visiting them in person.
            </p>
            <div class="grow flex justify-center items-center">
                <SearchLogo width={200} tw="fill-none stroke-white group-hover:stroke-orange-500 stroke-2 transition-colors duration-300" />
            </div>
        </a>

        <div class="w-16 h-[26rem] shrink-0 block min-[1200px]:hidden"></div>
    </div>
</div>
