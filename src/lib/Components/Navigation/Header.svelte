<script>
    import NameLogo from "$lib/Logos/NameLogo.svelte";
    import HamburgerMenu from "$lib/Components/Navigation/HamburgerMenu.svelte";
    import SymbolicLogo from "$lib/Logos/SymbolicLogo.svelte";
    import MobileNav from "./MobileNav.svelte";

    import { navToggle } from "./navLogic.svelte";
</script>

<nav class="flex items-center border-b-[1px] border-ception-glassyWhite">
    <a href="/" class="flex-1 lg:flex-none px-12 lg:w-1/3 box-border">
        <div class="hidden sm:block"><NameLogo width={150} /></div>
        <div class="sm:hidden block"><SymbolicLogo width={40} /></div>
    </a>
    <div class="flex-1 hidden lg:flex justify-center items-center px-12 py-8 border-l-[1px] border-ception-glassyWhite box-border">
        <a href="/about" class="text-white uppercase">About</a>
    </div>
    <div class="flex-1 hidden lg:flex justify-center items-center px-12 py-8 border-l-[1px] border-ception-glassyWhite box-border">
        <a href="/services" class="text-white uppercase">Services</a>
    </div>
    <div class="flex-1 hidden lg:flex justify-center items-center px-12 py-8 border-l-[1px] border-ception-glassyWhite box-border">
        <a href="/portfolio" class="text-white uppercase">Portfolio</a>
    </div>
    <div class="flex-1 hidden lg:flex justify-center items-center px-12 py-8 border-l-[1px] border-ception-glassyWhite box-border">
        <a href="/contact" class="text-white uppercase">Contact</a>
    </div>
    <div class="flex-1 lg:hidden flex justify-end items-center px-12 py-6 border-l-[1px] border-ception-glassyWhite box-border">
        <button class="z-50" onclick={navToggle}><HamburgerMenu width={40}/></button>
    </div>
</nav>

<MobileNav />