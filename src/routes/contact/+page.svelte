<script>
    import SymbolicLogo from "$lib/Logos/SymbolicLogo.svelte";
</script>

<div class="lg:h-firstpage gap-4 flex flex-col lg:flex-row justify-center items-center">
    <div class="w-full lg:w-1/2 h-full p-8 sm:p-20">
        <div class="w-full h-full group rounded-3xl overflow-hidden relative">
            <img src="TallCoolOwner.webp" alt="The Agency Owner" width="918" height="1528" class="h-full aspect-square object-cover rounded-3xl"/>
            <div class="gap-2 p-4 xs:p-10 flex flex-col absolute left-0 bottom-0 z-10">
                <SymbolicLogo width={50} tw="hidden xs:block"/>
                <SymbolicLogo width={30} tw="xs:hidden block"/>
                <h1 class="uppercase text-xl xs:text-3xl text-white font-black">Contact Us</h1>
                <p class="text-sm xs:text-xl text-neutral-200">No matter what you need, Ception's right here to help. We promise to get back to any emails within 24 hours!</p>
            </div>

            <div class="opacity-100 group-hover:opacity-0 bg-gradient-to-t from-ception-background/40 to-transparent w-full h-full top-0 left-0 absolute transition-opacity duration-300"></div>
            <div class="opacity-0 group-hover:opacity-100 bg-gradient-to-t from-ception-cyan/20 to-transparent w-full h-full top-0 left-0 absolute transition-opacity duration-300"></div>
            <div class="bg-gradient-to-b from-ception-background/40 to-transparent w-full h-full top-0 left-0 absolute transition-opacity duration-300"></div>
        </div>
    </div>

    <div class="w-full sm:w-5/6 lg:w-1/2 px-8 pb-24 lg:pb-0 gap-8 flex flex-col justify-center items-center">
        <div class="relative">
            <h1 class="font-bold text-6xl text-white relative z-10">Get in touch<span class="uppercase font-black text-cyan-600">.</span></h1>
            <svg class="opacity-50 hidden sm:block absolute w-full -bottom-12 z-0" width="1473" height="113" viewBox="0 0 1473 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 52.5C809.5 23.5004 689 177.5 747.5 52.5C806 -72.5003 1003.5 129.5 1470 24.9999" stroke="#0891B2" stroke-width="50"/>
            </svg>
        </div>
        <form class="w-full flex flex-col gap-2">
            <div class="gap-2 flex flex-col">
                <label for="email" class="text-lg text-white font-bold">Email <span class="text-red-800">*</span></label>
                <input id="email" type="text" placeholder="johndoe71@gmail.com" class="bg-neutral-850 h-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 p-3 text-neutral-200" />
            </div>
            <div class="gap-2 flex flex-col">
                <label for="Message" class="text-lg text-white font-bold">Message <span class="text-red-800">*</span></label>
                <textarea id="Message" placeholder="We'd love to work with you at Ception!" class="h-72 bg-neutral-850 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 p-3 text-neutral-200 resize-none" ></textarea>
            </div>
            <button class="mt-2 w-full h-12 bg-cyan-600 text-white rounded-xl hover:bg-cyan-700 transition-colors duration-300">Send Message</button>
        </form>
    </div>
</div>
