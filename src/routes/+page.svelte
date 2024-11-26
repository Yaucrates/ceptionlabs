<script lang="ts">
    import Embers from "$lib/Components/Embers.svelte";

    let isFire = $state(false);

    let setFire = (state: boolean) => {
        isFire = state;
    }
</script>

<div class="h-firstpage flex justify-center items-center gap-10 relative px-8">
    <div class="">
        <div class="gap-8 flex flex-col justify-center">
            <h1 class="uppercase text-4xl font-black text-white">
                <span class="text-5xl text-ception-cyan transition-colors duration-300">Ception</span> builds websites <br class="hidden sm:block"/>for your business.
            </h1>
            <p class="text-xl text-neutral-300">
                We take care of everything, from ensuring a smooth experience<br class="hidden sm:block"/>
                for your users and growing your brand, to achieving high search<br class="hidden sm:block"/>
                rankings and delivering measurable results.
            </p>
            <a href="/services" onmouseenter={() => setFire(true)} onmouseleave={() => setFire(false)} class="w-fit py-2 px-4 text-white text-lg font-medium bg-red-700 transition-colors duration-300 z-10 rounded-t-full rounded-r-full">Check Us Out</a>
        </div>
    </div>
    <div class="overflow-hidden flex justify-center items-center absolute inset-0">
        <Embers color={isFire ? "rgba(185, 28, 28, 0.9)" : "rgba(6, 206, 212, 0.7)"}/>
    </div>
</div>

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

<!-- <div class="bg-cyan-700 flex justify-center items-center">
    <div class="w-11/12 md:w-3/4 lg:w-7/12 py-20 gap-12 flex flex-col-reverse sm:flex-row justify-center items-center">
        <img src="quote_portrait.png" class="aspect-square rounded-full" alt="Owner" width="165" height="165"/>
        <div class="flex flex-col gap-4">
            <p class="text-white text-2xl">
                "Ception's here to create the best possible website for you. Whether the goal
                is to increase sales, build brand awareness, or provide valuable information
                to your audience, we’re here to help you achieve success."
                <span class="text-yellow-500 text-2xl font-bold">- Lead Web Developer</span>
            </p>
        </div>
    </div>
</div> -->

<div class="h-[250rem] relative">
    <div class="overflow-hidden flex justify-center items-center absolute top-0 inset-0 rotate-180">
        <Embers />
    </div>
</div>