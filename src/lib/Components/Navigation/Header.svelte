<script>
    import NameLogo from "$lib/Logos/NameLogo.svelte";
    import SymbolicLogo from "$lib/Logos/SymbolicLogo.svelte";
    import MobileNav from "./MobileNav.svelte";
    import BackgroundMusic from "./BackgroundMusic.svelte";

    let expanded = $state(false);

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

<nav class="fixed w-full px-8 py-4 flex justify-between items-center z-50">
    <a href="/" onclick={() => { expanded = false; } } class="flex justify-center items-center">
        <div class="hidden sm:block" aria-label="Go back to Home Page"><NameLogo width={150} /></div>
        <div class="sm:hidden block" aria-label="Go back to Home Page"><SymbolicLogo width={40} /></div>
    </a>
    <div class="gap-6 flex justify-center items-center relative">
        <BackgroundMusic />
        <a href="/contact" class="hidden xs:block text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-3xl duration-300 transition-colors">
            Let's Talk
        </a>
        <button class="gap-4 flex justify-center items-center border-2 px-4 py-2 rounded-3xl border-neutral-800 text-white z-50" onclick={navToggle}>
            Menu
        </button>
        <MobileNav {expanded} {navToggle} />
    </div>
</nav>