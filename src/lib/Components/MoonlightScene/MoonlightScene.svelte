<script lang="ts">
    let moon: HTMLElement;
    let cloud1: SVGElement;
    let cloud2: SVGElement;
    let cloud3: SVGElement;

    let x = 0;
    let y = 0;

	const handleMousemove = (event: any) => {
		x = event.clientX;
		y = event.clientY;

        updateAnimation();
	}

    const updateAnimation = () => {
        // Calculate offset based on mouse position (x, y)
        const offsetX = (window.innerWidth / 2 - x) * 0.02; // Adjust multiplier for intensity
        const offsetY = (window.innerHeight / 2 - y) * 0.02;

        // Move elements in the opposite direction of mouse movement
        moon.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Moon moves slightly more
        cloud1.style.transform = `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`;
        cloud2.style.transform = `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`;
        cloud3.style.transform = `translate(${offsetX * 2}px, ${offsetY * 2}px)`; // Cloud3 moves the least
    }
</script>

<svelte:body onmousemove={handleMousemove}/>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="w-fit h-fit flex justify-center items-center relative z-0">
    <div bind:this={moon}  class="h-96 w-96 rounded-full bg-ception-cyan relative shadow-cyan-pulse z-10">
        <div class="h-16 w-16 rounded-full bg-[#04BEC4] left-36 top-12 absolute"></div>
        <div class="h-10 w-10 rounded-full bg-[#04BEC4] left-52 top-32 absolute"></div>
        <div class="h-24 w-24 rounded-full bg-[#04BEC4] left-16 top-32 absolute"></div>
    </div>

    <!-- Back Clouds -->
    <svg bind:this={cloud1} width="400" viewBox="0 0 630 275" class="-top-20 -left-28 absolute" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 25C50 11.1929 61.1929 0 75 0H425C438.807 0 450 11.1929 450 25V25C450 38.8071 438.807 50 425 50H400.5C393.596 50 388 55.5964 388 62.5V62.5C388 69.4036 393.596 75 400.5 75H493C506.807 75 518 86.1929 518 100V100C518 113.807 506.807 125 493 125H329.5C322.596 125 317 130.596 317 137.5V137.5C317 144.404 322.596 150 329.5 150H405C418.807 150 430 161.193 430 175V175C430 188.807 418.807 200 405 200H347.5C340.596 200 335 205.596 335 212.5V212.5C335 219.404 340.596 225 347.5 225H605C618.807 225 630 236.193 630 250V250C630 263.807 618.807 275 605 275H155C141.193 275 130 263.807 130 250V250C130 236.193 141.193 225 155 225H182.5C189.404 225 195 219.404 195 212.5V212.5C195 205.596 189.404 200 182.5 200H25C11.1929 200 0 188.807 0 175V175C0 161.193 11.1929 150 25 150H171.5C178.404 150 184 144.404 184 137.5V137.5C184 130.596 178.404 125 171.5 125H161C148.297 125 138 114.703 138 102V100C138 86.1929 149.193 75 163 75H261.5C268.404 75 274 69.4036 274 62.5V62.5C274 55.5964 268.404 50 261.5 50H75C61.1929 50 50 38.8071 50 25V25Z" fill="#D9D9D9"/>
    </svg>
    <svg bind:this={cloud2} width="400" viewBox="0 0 500 275" class="top-12 -right-32 absolute" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M73 25C73 11.1929 84.1929 0 98 0H448C461.807 0 473 11.1929 473 25V25C473 38.8071 461.807 50 448 50H366.5C359.596 50 354 55.5964 354 62.5V62.5C354 69.4036 359.596 75 366.5 75H458C471.807 75 483 86.1929 483 100V100C483 113.807 471.807 125 458 125H295.5C288.596 125 283 130.596 283 137.5V137.5C283 144.404 288.596 150 295.5 150H424C437.807 150 449 161.193 449 175V175C449 188.807 437.807 200 424 200H363.5C356.596 200 351 205.596 351 212.5V212.5C351 219.404 356.596 225 363.5 225H475C488.807 225 500 236.193 500 250V250C500 263.807 488.807 275 475 275H25C11.1929 275 0 263.807 0 250V250C0 236.193 11.1929 225 25 225H198.5C205.404 225 211 219.404 211 212.5V212.5C211 205.596 205.404 200 198.5 200H130C116.193 200 105 188.807 105 175V172.5C105 160.074 115.074 150 127.5 150H137.5C144.404 150 150 144.404 150 137.5V137.5C150 130.596 144.404 125 137.5 125H41C27.1929 125 16 113.807 16 100V100C16 86.1929 27.1929 75 41 75H164.5C171.404 75 177 69.4036 177 62.5V62.5C177 55.5964 171.404 50 164.5 50H98C84.1929 50 73 38.8071 73 25V25Z" fill="#D9D9D9"/>
    </svg>

    <!-- Front Clouds -->
    <svg bind:this={cloud3} width="400" viewBox="0 0 554 275" class="-bottom-12 -left-32 absolute z-20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M154 25C154 11.1929 165.193 0 179 0H529C542.807 0 554 11.1929 554 25V25C554 38.8071 542.807 50 529 50H393.5C386.596 50 381 55.5964 381 62.5V62.5C381 69.4036 386.596 75 393.5 75H529C542.807 75 554 86.1929 554 100V100C554 113.807 542.807 125 529 125H287.5C280.596 125 275 130.596 275 137.5V137.5C275 144.404 280.596 150 287.5 150H334C347.807 150 359 161.193 359 175V179.5C359 190.822 349.822 200 338.5 200H330.5C323.596 200 318 205.596 318 212.5V212.5C318 219.404 323.596 225 330.5 225H475C488.807 225 500 236.193 500 250V250C500 263.807 488.807 275 475 275H25C11.1929 275 0 263.807 0 250V250C0 236.193 11.1929 225 25 225H111.5C118.404 225 124 219.404 124 212.5V212.5C124 205.596 118.404 200 111.5 200H40C26.1929 200 15 188.807 15 175V175C15 161.193 26.1929 150 40 150H129.5C136.404 150 142 144.404 142 137.5V137.5C142 130.596 136.404 125 129.5 125H112C98.1929 125 87 113.807 87 100V100C87 86.1929 98.1929 75 112 75H236.5C243.404 75 249 69.4036 249 62.5V62.5C249 55.5964 243.404 50 236.5 50H179C165.193 50 154 38.8071 154 25V25Z" fill="#A0A0A0"/>
    </svg>
</div>

<style>
    @keyframes pulse-shadow {
        0% {
            box-shadow: 0 0 20px 2px rgba(4, 190, 196, 0.6), 0 0 20px 4px rgba(4, 190, 196, 0.4);
        }
        50% {
            box-shadow: 0 0 30px 4px rgba(4, 190, 196, 0.8), 0 0 30px 6px rgba(4, 190, 196, 0.6);
        }
        100% {
            box-shadow: 0 0 20px 2px rgba(4, 190, 196, 0.6), 0 0 20px 4px rgba(4, 190, 196, 0.4);
        }
    }

    .shadow-cyan-pulse {
        animation: pulse-shadow 2s infinite;
    }
</style>