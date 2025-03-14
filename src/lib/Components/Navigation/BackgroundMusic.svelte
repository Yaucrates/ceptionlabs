<script lang="ts">
    import { onMount } from "svelte";

    let isPlaying = false;
    let audio: HTMLAudioElement;
    let canvas: HTMLCanvasElement;

    let animationFrame: number | null = null;
    let phase = 0;
    let amplitude = 0;
    const maxAmplitude = 10;
    let isFadingIn = false;
    let isFadingOut = false;

    // Function to play or pause the audio
    const playAudio = () => {
        if (!audio) return;

        if (isPlaying) {
            isPlaying = false;
            audio.pause();
            isFadingOut = true;
        } else {
            isPlaying = true;
            audio.play();
            amplitude = 0;
            isFadingIn = true;
            startAnimation();
        }
    };

    // Animation functions
    const startAnimation = () => {
        if (animationFrame === null) {
            animate();
        }
    };

    const stopAnimation = () => {
        if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
    };

    function plotSine(ctx: CanvasRenderingContext2D, phase: number) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const frequency = 5;

        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#06CED4";

        let x = 0;
        let y = 0;

        while (x < width) {
            y = height / 2 + amplitude * Math.sin((x / frequency) + phase);
            ctx.lineTo(x, y);
            x += 1;
        }

        ctx.stroke();
    }

    const animate = () => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        phase += 0.1;

        if (isFadingIn) {
            amplitude += 0.5;
            if (amplitude >= maxAmplitude) {
                amplitude = maxAmplitude;
                isFadingIn = false;
            }
        }

        if (isFadingOut) {
            amplitude -= 0.5;
            if (amplitude <= 0) {
                amplitude = 0;
                isFadingOut = false;
                stopAnimation();
            }
        }

        plotSine(ctx, phase);

        if (isPlaying || isFadingIn || isFadingOut) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            stopAnimation();
        }
    };

    onMount(() => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        plotSine(ctx, phase);
    });
</script>

<audio bind:this={audio} src="Buddha.mp3" preload="none" loop></audio>

<button onclick={playAudio} aria-label="music player" class="w-fit h-fit border-[1px] border-neutral-800 rounded-full">
    <canvas
        bind:this={canvas}
        width="24"
        height="24"
        class="bg-transparent p-[8px]"
    ></canvas>
</button>
