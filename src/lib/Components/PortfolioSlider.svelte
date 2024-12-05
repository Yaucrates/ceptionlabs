<script lang="ts">
    import { onMount } from 'svelte';

    let slider = $state(0);

    const slides = [
        {
            src: "projects/DormDojoHomepage.webp",
            alt: "Dorm Dojo Homepage",
            width: "1600",
            height: "1003",
        },
        {
            src: "projects/impart-education.webp",
            alt: "Impart Education",
            width: "1600",
            height: "1003",
        },
        {
            src: "projects/Personal-Portfolio.webp",
            alt: "Personal Portfolio",
            width: "1600",
            height: "1003",
        }
    ];

    const positions = [
        {
            height: "h-64 md:h-72 lg:h-80",
            translate: "translate-y-20 translate-x-6 sm:translate-y-0 sm:-translate-x-44 md:-translate-x-60 lg:-translate-x-96",
            zIndex: "z-[1]"
        },
        {
            height: "h-72 md:h-80 lg:h-96",
            translate: "translate-y-12 translate-x-4 sm:translate-y-0 sm:-translate-x-24 md:-translate-x-40 lg:-translate-x-64",
            zIndex: "z-[2]"
        },
        {
            height: "h-80 md:h-96 lg:h-[30rem]",
            translate: "translate-y-0 -translate-x-0",
            zIndex: "z-[3]"
        }
    ];

    const getSlideClass = (index: number) => {
        const positionIndex = (index - slider + slides.length) % slides.length;
        const pos = positions[positionIndex];
        return `${pos.height} ${pos.translate} absolute ${pos.zIndex} transition-all duration-300`;
    };

    // Automatically increase slider every 8 seconds
    onMount(() => {
        const interval = setInterval(() => {
            slider = (slider + 1) % slides.length;
        }, 8000);

        // Clear interval when component is destroyed
        return () => clearInterval(interval);
    });
</script>

<div class="w-full h-80 sm:h-96 md:h-[36rem] flex justify-end items-center relative">
    {#each slides as slide, index}
        <img src={slide.src} alt={slide.alt} loading="lazy" class={getSlideClass(index)} />
    {/each}
</div>
