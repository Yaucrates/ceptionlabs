<script lang="ts">
    import { onMount } from 'svelte';

    let slider = $state(0);

    const slideClass = [
        "h-[24rem] -translate-x-80 absolute z-[1] transition-all duration-300",
        "h-[27rem] -translate-x-48 absolute z-[2] transition-all duration-300",
        "h-[30rem] -translate-x-0 absolute z-[3] transition-all duration-300"
    ];

    const getSlideClass = (offset: number) => {
        return slideClass[(slider + offset) % slideClass.length];
    };

    // Automatically increase slider every 5 seconds
    onMount(() => {
        const interval = setInterval(() => {
            slider = (slider + 1) % slideClass.length;
        }, 8000);

        // Clear interval when component is destroyed
        return () => clearInterval(interval);
    });
</script>

<div class="px-20 w-full h-[36rem] flex justify-end items-center relative">
    <img src="projects/DormDojoHomepage.webp" alt="Dorm Dojo Homepage" class={getSlideClass(0)} />
    <img src="projects/impart-education.webp" alt="Dorm Dojo Homepage" class={getSlideClass(1)} />
    <img src="projects/Personal-Portfolio.webp" alt="Dorm Dojo Homepage" class={getSlideClass(2)} />
</div>