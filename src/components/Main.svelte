<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: 'iBula',
      icon: 'fa-solid fa-prescription-bottle-medical',
      description: 'Aplicativo para consultas de bulas médicas com barra de pesquisa paginação e detalhes do medicamento e download e visualização da bula feito com',
      stacks: 'ReactJS, NextJS, Bootstrap e Firebase.'
    },
    {
      name: 'Project 123',
      icon: 'fa-solid fa-algolia',
      description: 'App para lorem ipsum',
      stacks: 'ReactJS, NextJS, Bootstrap e Firebase.'
    },
    {
      name: 'Project 0',
      icon: 'fa-solid fa-lemon',
      description: 'App para lorem ipsum',
      stacks: 'ReactJS, NextJS, Bootstrap e Firebase.'
    },
  ]

  let benefits = [
    {name: 'um desenvolvedor front end criativo e detalhista', description: 'HTML, CSS e Javascript são a base de tudo e estou sempre reforçando a minha base.'},
    {name: 'um frameworkholic', description: 'saber os conceitos de um framework é esscencial para desenvolver o front end de uma aplicação, esse é o meu diferencial.'},
    {name: 'um ensinador e um aprendiz', description: 'ensinar e aprender são conceitos básicos da vida e eu levo isso sempre comigo.'}
  ]

</script>
<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl smm:text-5xl md:text-6xl">
        Olá! Sou <span class="text-violet-400">Andres</span> Oliveira <br/>
        Dev <span class="text-violet-400">Front End</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        Minha <span class="text-violet-400">linguagem principal é</span> Javascript <br/>
        Frameworks e Libraries: <span class="text-violet-400">ReactJS, VueJS, NextJS e Svelte.</span>
      </p>
      <a
        href="#"
        target="_blank"
        class="hover:bg-violet-400 hover:opacity-100 blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl
        relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950
        cursor-pointer"
      >
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover: translate-x-full z-0 duration-200"/>
        <h4 class="relative z-9">Contato &rarr;</h4>
      </a>
    </div>
    <div class="relative shadow-2x1 grid place-items-center">
      <img src={"images/profile.jpg"} alt="Profile pic" class="object-cover z=[2] max-h-[70vh]" />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        Um pouco dos meus projetos.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curiso para <span class="text-violet-400">ver</span> meu
        trabalho ?
      </h3>
    </div>
    <a
      href="#"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0
      -mt-10 hover:border-violet-700 duration-200">
      <i class="fa-regular fa-circle-play"></i>
      <p>Ver Github</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      {#each steps as step}
        <Step step={step}>
          <p class="font-medium text-xl sm:text-1xl md:text-2xl">
            {step.description}
            <strong class="text-violet-400">
              {step.stacks} 
            </strong>
          </p>
        </Step>
      {/each}
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div
      class="flex flex-col gap-2 text-center relative p-4
        before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 before:bg-violet-700"
        >
          <h6 class="text-lg sm:text-xl md:text-2xl">Quer saber mais ?</h6>
          <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Um pouco <span class="text-violet-400"> sobre</span> mim:
          </h3>
    </div>
    <p class="mx-auto font-semibold text-lg sm:text-xl md:text-2xl">Eu sou...</p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p class="text-4xl sm:text-5xl md:text-6xl text-slate-50">
            {index+1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              <p class="text-violet-400">{benefit.name}</p>
            </h3>
            <p class="text-1xl sm:text-2xl md:text-3xl">{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>