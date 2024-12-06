<script>
    import CaseStudyChart from "$lib/Components/CaseStudyChart.svelte";
    import ProjectCard from "$lib/Components/ProjectCard.svelte";

    let projects = [
        {
            title: "Dorm Dojo",
            subtitle: "Ecommerce Project",
            description: "An E-Commerce site that hooked into the Shopify API to create a customized storefront.",
            href: "https://www.dormdojo.com/",
            src: "/projects/DormDojoHomepage.webp"
        },
        {
            title: "Personal Portfolio",
            subtitle: "Personal Portfolio",
            description: "Developed a developer portfolio to showcase projects and work experience in an easy and accessible way.",
            href: "https://www.yousifabdulhussein.com/",
            src: "/projects/Personal-Portfolio.webp"
        },
        {
            title: "Impart Education",
            subtitle: "Educational Platform",
            src: "/projects/impart-education.webp"
        },
    ]
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Ception Labs designs are amazing. Take a look at them yourself!" />
</svelte:head>

<div class="flex flex-col">
    <div class="pb-8 pt-20 gap-16 flex flex-col sm:flex-row justify-center items-center">
        <div class="w-3/4 sm:w-1/4 gap-4 flex flex-col">
            <h1 class="text-neutral-100 text-4xl uppercase font-black">Case Studies</h1>
            <p class="text-neutral-300 text-xl">A closer look at what the results we've delivered to clients in the past.</p>
        </div>
        <CaseStudyChart size={300} tw="hidden sm:block"/>
        <CaseStudyChart size={240} tw="sm:hidden block"/>
    </div>
    <div class="px-8 sm:px-16 py-16 gap-x-4 gap-y-12 grid grid-cols-1 lg:grid-cols-2">
        {#each projects as project}
            <div class="w-full flex justify-center items-center">
                <ProjectCard
                    title={project.title}
                    subtitle={project.subtitle}
                    description={project.description}
                    href={project.href}
                    src={project.src}
                />
            </div>
        {/each}
    </div>
</div>
