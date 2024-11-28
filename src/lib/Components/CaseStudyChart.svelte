<script lang="ts">
    import { onMount } from 'svelte';

    // Sample data for six axes
    let data = [70, 80, 90, 100, 80, 100];
    let labels = ['Delivery Speed', 'Creativity', 'UX', 'Performance', 'UI', 'Quality'];

    // Animated data starts from zeros
    let animatedData = [0, 0, 0, 0, 0, 0];

    const maxValue = 100; // Maximum value for scaling
    const size = 300; // SVG size
    const center = size / 2;
    const radius = center - 20; // Radius of the chart

    // Function to calculate polygon points based on data values
    function calculatePoints(values: number[]) {
    return values
        .map((value: number, i: number) => {
            const angle = Math.PI / 2 + (2 * Math.PI * i) / values.length;
            const r = (value / maxValue) * radius;
            const x = center + r * Math.cos(angle);
            const y = center - r * Math.sin(angle);
            return `${x},${y}`;
        })
        .join(' ');
    }

    // Animation function to interpolate data values
    onMount(() => {
        const duration = 1000; // Animation duration in milliseconds
        let startTime: number | null = null;

        function animate(time: number) {
            if (!startTime) startTime = time;
            let progress = (time - startTime) / duration;
            if (progress > 1) progress = 1;

            animatedData = data.map((value) => value * progress);

            if (progress < 1) {
            requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    });
</script>
  
<style>
    svg {
        overflow: visible;
    }

    text {
        font-family: sans-serif;
        fill: #fff;
    }
</style>
  
<svg width="{size}" height="{size}">
    <!-- Draw axes -->
    {#each Array(6) as _, i}
        <line
            x1="{center}"
            y1="{center}"
            x2="{center + radius * Math.cos(Math.PI / 2 + (2 * Math.PI * i) / 6)}"
            y2="{center - radius * Math.sin(Math.PI / 2 + (2 * Math.PI * i) / 6)}"
            stroke="#ddd"
        />
    {/each}
  
    <!-- Draw concentric polygons for grid lines -->
    {#each [0.2, 0.4, 0.6, 0.8, 1] as fraction}
        <polygon
            points="{calculatePoints(Array(6).fill(maxValue * fraction))}"
            fill="none"
            stroke="#eee"
        />
    {/each}
  
    <!-- Draw animated data polygon -->
    <polygon
        points="{calculatePoints(animatedData)}"
        fill="rgba(6, 206, 212, 0.5)"
        stroke="#06CED4"
        stroke-width="2"
    />
  
    <!-- Draw labels -->
    {#each labels as label, i}
        <text
            x="{center + (radius + 15) * Math.cos(Math.PI / 2 + (2 * Math.PI * i) / 6)}"
            y="{center - (radius + 15) * Math.sin(Math.PI / 2 + (2 * Math.PI * i) / 6)}"
            text-anchor="middle"
            alignment-baseline="middle"
        >
            {label}
        </text>
    {/each}
</svg>
  