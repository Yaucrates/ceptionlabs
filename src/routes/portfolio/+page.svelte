<script>
    import ProjectCard from "$lib/Components/ProjectCard.svelte";

    let projects = [
        {
            title: "Dorm Dojo",
            subtitle: "Ecommerce Project",
            description: "An E-Commerce site that hooked into the shopify API to make a headless storefront.",
            href: "https://www.dormdojo.com/",
            src: "/projects/DormDojoHomepage.webp"
        },
        {
            title: "Personal Portfolio",
            subtitle: "Personal Portfolio",
            description: "Created while the founder was attending the University of Tennessee Knoxville as a way to showcase his projects.",
            href: "https://www.yousifabdulhussein.com/",
            src: "/projects/Personal-Portfolio.webp"
        },
        {
            title: "Impart Education",
            subtitle: "May '24",
            description: "Educational Platform",
            src: "/projects/impart-education.webp"
        },
    ]
</script>

<div class="w-full px-16 py-16 gap-x-4 gap-y-12 grid grid-cols-1 lg:grid-cols-2">
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
