<script>
    import NameLogo from "$lib/Logos/NameLogo.svelte";
    import SymbolicLogo from "$lib/Logos/SymbolicLogo.svelte";
    import MobileNav from "./MobileNav.svelte";
    import BackgroundMusic from "./BackgroundMusic.svelte";

    let expanded = false;

    let navToggle = () => {
        expanded = !expanded;
        // Toggle scrolling
        if (expanded) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }
    };
</script>

<nav class="fixed w-full px-8 py-4 flex justify-between items-center border-ception-glassyWhite z-10">
    <a href="/" class="flex justify-center items-center">
        <div class="hidden sm:block"><NameLogo width={150} /></div>
        <div class="sm:hidden block"><SymbolicLogo width={40} /></div>
    </a>
    <div class="gap-6 flex justify-center items-center relative">
        <BackgroundMusic />
        <a href="/contact" class="text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-3xl duration-300 transition-colors">
            Let's Talk
        </a>
        <button class="gap-4 flex justify-center items-center border-2 px-4 py-2 rounded-3xl border-neutral-800 text-white z-50" onclick={navToggle}>
            Menu
        </button>
        <MobileNav {expanded}/>
    </div>
</nav>