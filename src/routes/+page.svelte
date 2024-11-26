<script>
    import PortfolioSlider from "$lib/Components/PortfolioSlider.svelte";
</script>

<div class="gap-10 flex flex-col relative">
    <div class="px-20 pt-24 pb-96 flex justify-around items-center">
        <h1 class="w-1/2 text-white text-6xl font-semibold">
            Web Design<br/>
            and Development<br/>
            you can rely on.
        </h1>
        <div class="w-1/3 gap-4 flex flex-col">
            <p class="text-neutral-200 text-xl">
                Whether the goal is to increase sales, build brand awareness, or
                provide valuable information to your audience, Ception's here to
                help you achieve success!
            </p>
            <a href="/services" class="w-fit py-2 px-4 text-white text-lg font-medium bg-red-700 transition-colors duration-300 z-10 rounded-t-full rounded-r-full">Check Us Out</a>
        </div>
    </div>
    
    <div class="w-full absolute -bottom-56">
        <PortfolioSlider />
    </div>
</div>

<div class="bg-neutral-950 h-[70rem] px-20 pt-80">
    <div class="gap-4 flex flex-col">
        <h1 class="text-4xl font-black uppercase text-white">Why do you <span class="text-ception-cyan">need</span> a website?</h1>
        <p class="text-xl text-neutral-300">
            If you want to increase your revenue, you need a website. It's that simple.<br/>
            Potential customers are find businesses online, and if you're not there.<br/>
            they'll find someone else who is.
        </p>
    </div>
    <div class="py-20 gap-20 flex justify-between items-center">
        <a class="w-[20rem] h-[26rem] px-6 py-8 border-2 border-neutral-900 gap-2 flex flex-col relative" target="_blank" href="https://www.prnewswire.com/news-releases/half-of-consumers-consider-a-companys-website-design-crucial-to-their-opinion-of-that-brand-301274695.html">
            <h3 class="text-lg text-white font-semibold uppercase">Brand:</h3>
            <p class="text-white">
                <span class="text-ception-cyan">50%</span>
                of people say that their impression of a business
                <span class="text-ception-cyan">depends</span>
                on the company’s website design.
            </p>
        </a>

        <a class="w-[20rem] h-[26rem] px-6 py-8 border-2 border-neutral-900 gap-2 flex flex-col relative" target="_blank" href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/">
            <h3 class="text-lg text-white font-semibold uppercase">Conversion:</h3>
            <p class="text-white">
                <span class="text-ception-cyan">53%</span>
                of visits are
                <span class="text-ception-cyan">abandoned</span>
                if a mobile site takes longer than
                <span class="text-ception-cyan">3 seconds</span>
                to load.
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
        </a>

        <a class="w-[20rem] h-[26rem] px-6 py-8 border-2 border-neutral-900 gap-2 flex flex-col relative" target="_blank" href="https://www.prnewswire.com/news-releases/76-of-consumers-look-at-online-presence-before-physically-visiting-a-business-301272462.html">
            <h3 class="text-lg text-white font-semibold uppercase">Discoverability:</h3>
            <p class="text-white">
                <span class="text-ception-cyan">76%</span>
                of people find businesses online
                <span class="text-ception-cyan">BEFORE</span>
                visiting them in person.
            </p>
        </a>
    </div>
</div>

<div class="h-screen"></div>

<!--
<div class="px-8 py-12 gap-8 flex flex-col justify-center items-center bg-neutral-900 border-y-8 border-cyan-950">
    <h1 class="text-4xl font-black uppercase text-white">Why do you <span class="text-ception-cyan">need</span> a website?</h1>
    <ol class="w-full sm:w-11/12 md:w-3/4 lg:w-7/12 gap-12 flex flex-col list-decimal">
        <li class="text-xl font-bold uppercase text-white">
            <span class="text-2xl text-ception-cyan">50%</span>
            of people say that their impression of a business
            <span class="text-2xl text-ception-cyan">depends</span>
            on the company’s website design.
            <sup class="text-yellow-500"><a target="_blank" href="https://www.prnewswire.com/news-releases/half-of-consumers-consider-a-companys-website-design-crucial-to-their-opinion-of-that-brand-301274695.html">(1)</a></sup>
        </li>
        <li class="text-xl font-bold uppercase text-white">
            <span class="text-2xl text-ception-cyan">53%</span>
            of visits are
            <span class="text-2xl text-ception-cyan">abandoned</span>
            if a mobile site takes longer than
            <span class="text-2xl text-ception-cyan">3 seconds</span>
            to load.
            <sup class="text-yellow-500"><a target="_blank" href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/">(2)</a></sup>
        </li>
        <li class="text-xl font-bold uppercase text-white">
            <span class="text-2xl text-ception-cyan">76%</span>
            of people find businesses online
            <span class="text-2xl text-ception-cyan">BEFORE</span>
            visiting them in person.
            <sup class="text-yellow-500"><a target="_blank" href="https://www.prnewswire.com/news-releases/76-of-consumers-look-at-online-presence-before-physically-visiting-a-business-301272462.html">(3)</a></sup>
        </li>
    </ol>
</div>
-->