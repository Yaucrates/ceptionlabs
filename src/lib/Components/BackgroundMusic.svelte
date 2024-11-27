<script lang="ts">
    import { onMount } from "svelte";

    let isPlaying = false;
    let audio: HTMLAudioElement;
    let canvas: HTMLCanvasElement;

    let animationFrame: number | null = null; // Store the animation frame ID
    let phase = 0; // Initial phase for sine wave
    let amplitude = 0; // Start amplitude at 0 for fade-in effect
    const maxAmplitude = 10; // Maximum amplitude
    let isFadingIn = false; // Indicates whether we are fading in
    let isFadingOut = false; // Indicates whether we are fading out

    // Function to play or pause the audio
    const playAudio = () => {
        if (!audio) return;

        isPlaying = !isPlaying;

        if (isPlaying) {
            audio.play();
            amplitude = 0; // Start from zero amplitude
            isFadingIn = true; // Start fading in
            isFadingOut = false; // Ensure fading out is false
            startAnimation();
        } else {
            audio.pause();
            isFadingOut = true; // Start fading out
            isFadingIn = false; // Ensure fading in is false
        }
    };

    // Function to start animation
    const startAnimation = () => {
        if (animationFrame === null) {
            animate();
        }
    };

    // Function to stop animation
    const stopAnimation = () => {
        if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        }
    };

    // Function to plot the sine wave
    function plotSine(ctx: CanvasRenderingContext2D, phase: number) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const frequency = 5;

        ctx.clearRect(0, 0, width, height); // Clear canvas

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

    // Animation loop
    const animate = () => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        phase += 0.1; // Increment the phase to create oscillation

        // Fade in
        if (isFadingIn) {
            amplitude += 0.5; // Adjust the increment for fade-in speed
            if (amplitude >= maxAmplitude) {
                amplitude = maxAmplitude;
                isFadingIn = false;
            }
        }

        // Fade out
        if (isFadingOut) {
            amplitude -= 0.5; // Adjust the decrement for fade-out speed
            if (amplitude <= 0) {
                amplitude = 0;
                isFadingOut = false;
                stopAnimation(); // Stop animation when amplitude reaches 0
            }
        }

        plotSine(ctx, phase);

        // Continue animation if necessary
        if (isPlaying || isFadingIn || isFadingOut) {
            animationFrame = requestAnimationFrame(animate); // Request next frame
        } else {
            stopAnimation(); // Ensure animation stops if not playing or fading
        }
    };

    onMount(() => {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        plotSine(ctx, phase); // Draw initial static sine wave
    });
</script>

<audio bind:this={audio} src="Buddha.mp3" preload="auto"></audio>

<button onclick={playAudio} aria-labelledby="music player" class="w-fit h-fit">
    <canvas
        bind:this={canvas}
        id="canvas"
        width="30"
        height="30"
        class="bg-transparent border-[1px] border-neutral-800 rounded-full"
    ></canvas>
</button>
