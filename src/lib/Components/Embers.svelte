<script lang="ts">
    import { onMount } from "svelte";

    let { color, maxSize, minSize, maxSpeed, minSpeed }: {
        color: string,
        maxSize: number,
        minSize: number,
        maxSpeed: number,
        minSpeed: number
    } = $props();

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    // Ember particle settings
    const embers: Ember[] = [];
    const emberCount = 200;
    const emberSettings = {
        maxSize,
        minSize,
        maxSpeed,
        minSpeed,
        color
    };

    const handleResize = () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }

    onMount(() => {
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // Create initial embers
        for (let i = 0; i < emberCount; i++) {
            embers.push(new Ember());
        }

        animate();
    })

    // Ember particle class
    class Ember {
        x!: number;
        y!: number;
        size!: number;
        speed!: number;
        opacity!: number;
        fadeRate!: number;
        color!: string;

        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = emberSettings.minSize + Math.random() * (emberSettings.maxSize - emberSettings.minSize);
            this.speed = emberSettings.minSpeed + Math.random() * (emberSettings.maxSpeed - emberSettings.minSpeed);
            this.opacity = 1;
            this.fadeRate = Math.random() * 0.02 + 0.005;
            this.color = color;
        }

        update() {
            this.y -= this.speed;
            this.opacity -= this.fadeRate;
            if (this.opacity <= 0) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color.replace('0.7', this.opacity.toFixed(2)); // Adjust opacity
            ctx.fill();
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        embers.forEach(ember => {
            ember.update();
            ember.draw();
        });

        requestAnimationFrame(animate);
    }
</script>

<svelte:window on:resize={handleResize}></svelte:window>


<canvas bind:this={canvas} class="w-full h-full"></canvas>