<script>
  import Projects from "./Projects.svelte";
  import { database } from "../firebase/config";
  import { get, ref } from "firebase/database"
  import { onMount } from "svelte";

  let projects = undefined
  let about = undefined

  onMount( async () => {
    await loadProjects()
    await loadAbout()
  })

  async function loadProjects() {
    const projectsRef = ref(database, 'projects')

    try{
      // await new Promise(resolve => setTimeout(resolve, 3000))
  
      const snapshot = await get(projectsRef)
  
      if(snapshot.exists()) {
        const projectsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data
        }))

        projects = projectsArray
        
        return projectsArray
  
      } else {
        console.log('error')
      }
      
    } catch(err){
      console.error(err);
    }
  }

  async function loadAbout() {
    const aboutRef = ref(database, 'about')

    try{
      await new Promise(resolve => setTimeout(resolve, 3000))
  
      const snapshot = await get(aboutRef)
  
      if(snapshot.exists()) {
        const aboutArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data
        }))

        about = aboutArray
        
        return aboutArray
  
      } else {
        console.log('error')
      }
      
    } catch(err){
      console.error(err);
    }
  }

</script>
<main class="flex flex-col flex-1 sm:p-10 p-4">
  <section id="introPage" class="sm:h-[80vh] grid place-items-center grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-0">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl smm:text-5xl md:text-6xl">
        Olá! Sou <span class="text-primary">Andres</span> Oliveira <br/>
        Dev <span class="text-primary">Front End</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        Minha <span class="text-primary">linguagem principal é</span> Javascript <br/>
        Frameworks e Libraries: <span class="text-primary">ReactJS, VueJS, NextJS e Svelte.</span>
      </p>
      <a href="https://api.whatsapp.com/send?phone=+5519992282130&text=Olá Andrés!" target="_blank">
        <button class="btn btn-primary mx-auto lg:text-2xl md:text-2xl sm:text-3xl">
          Contato
        </button>
      </a>
    </div>
    <div class="relative shadow-2x1 grid place-items-center">
      <img src={"images/profile.png"} alt="Profile pic" class="object-cover z=[2] w-[50vh] h-[50vh] rounded-full" />
    </div>
  </section>


  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24 p-4">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        Um pouco dos meus projetos.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curioso para <span class="text-primary">ver</span> meu
        trabalho ?
      </h3>
    </div>
    
    <a
      href="https://www.github.com/dezoliveira"
      target="_blank"
      class="mx-auto px-4 py-2 flex items-center gap-2 -mb-4 sm:-mb-0
      -mt-10 ">
      <button class="btn btn-primary">
        <i class="fa-brands fa-github-alt text-3xl"></i>
        Ver Github
      </button>
    </a>
    {#if projects !== undefined}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
        {#each projects as project}
          <Projects project={project}>
            <p class="font-medium text-xl sm:text-1xl md:text-2xl">
              {project.description}
              <strong class="text-primary">
                {project.stacks} 
              </strong>
            </p>
          </Projects>
        {/each}
      </div>
    {:else}
      <div class="text-center">
        <span class="loading loading-spinner text-secondary w-[50px]"></span>
      </div>
    {/if}
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <div class="stat-title">Total de Projetos</div>
        <div class="stat-value text-primary">+78</div>
        <div class="stat-desc">5 em andamento</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div class="stat-title">Total de commits</div>
        <div class="stat-value text-secondary">+722</div>
        <div class="stat-desc">+250 contribuiçoes em 2024</div>
      </div>
      
      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="images/profile.png" />
            </div>
          </div>
        </div>
        <div class="stat-value">70%</div>
        <div class="stat-title">uso de Frameworks</div>
        <div class="stat-desc text-secondary">30% de Javascript</div>
      </div>
    </div>
  </section>

  <section
    id="about"
    class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div
      class="flex flex-col gap-2 text-center relative p-4
        before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-primary
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 before:bg-primary"
        >
          <h6 class="text-lg sm:text-xl md:text-2xl">Quer saber mais ?</h6>
          <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Um pouco <span class="text-primary"> sobre</span> mim:
          </h3>
    </div>
    <p class="mx-auto font-semibold text-lg sm:text-xl md:text-2xl">Eu sou...</p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#if about !== undefined}
        {#each about as about, index}
          <div class="flex gap-6 sm:gap-8">
            <p class="text-4xl sm:text-5xl md:text-6xl text-slate-50">
              {index+1}
            </p>
            <div class="flex flex-col gap-6 sm:gap-8">
              <h3 class="text-2xl sm:text-3xl md:text-5xl">
                <p class="text-primary">{about.title}</p>
              </h3>
              <p class="text-1xl sm:text-2xl md:text-3xl">{about.description}</p>
            </div>
          </div>
        {/each}
      {:else}
        <div class="flex flex-col items-center justify-center w-full">
          <span class="loading loading-spinner text-secondary w-[50px]"></span>
        </div>
      {/if}
    </div>
  </section>
</main>