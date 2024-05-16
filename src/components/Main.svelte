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
      name: 'Vue Souls',
      icon: 'fa-solid fa-khanda',
      description: 'Aplicativo que utiliza uma API pública de armas do jogo Dark Souls. O app também utiliza o ChartJS para exibir gráficos. Feito com',
      stacks: 'VueJS, ChartJS.'
    },
    {
      name: 'Love Calculator',
      icon: 'fa-solid fa-heart',
      description: 'Love Calculator é um projeto que utiliza uma API pública que calcula a combinação de duas pessoas através do seus nomes. Feito com',
      stacks: ' HTML, CSS e Javascript'
    },
    {
      name: 'JS Calendar',
      icon: 'fa-solid fa-calendar',
      description: 'JSCalendar é um projeto de agendamento que utiliza um calendário para reservar horários e dias em poucos cliques. O app utiliza o local storage para reservar os agendamentos. Feito com',
      stacks: 'HTML, CSS e Javascript.'
    },
    {
      name: 'Flexblog',
      icon: 'fa-solid fa-blog',
      description: 'Flexblog é um projeto que utiliza vários conceitos do Flexbox (CSS) como orientações, alinhamentos, crescimento e alocação dos blocos. Feito com',
      stacks: 'HTML, CSS e Javascript.'
    },
    {
      name: 'Javascript Form',
      icon: 'fa-solid fa-file-lines',
      description: 'Javascript Form é um formulário que valida em tempo real se os campos preenchidos são válidos ou não. Foi o projeto que me fez entrar na área. Feito com',
      stacks: 'HTML, CSS e Javascript.'
    },
  ]

  let benefits = [
    {name: 'um desenvolvedor front end criativo e detalhista', description: 'HTML, CSS e Javascript são a base de tudo e estou sempre reforçando a minha base.'},
    {name: 'um frameworkholic', description: 'saber os conceitos de um framework é esscencial para desenvolver o front end de uma aplicação, esse é o meu diferencial.'},
    {name: 'um ensinador e um aprendiz', description: 'ensinar e aprender são conceitos básicos da vida e eu levo isso sempre comigo.'}
  ]

</script>
<main class="flex flex-col flex-1 sm:p-10 p-4">
  <section id="introPage" class="sm:h-[80vh] grid place-items-center grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-0">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl smm:text-5xl md:text-6xl">
        Olá! Sou <span class="text-violet-400">Andres</span> Oliveira <br/>
        Dev <span class="text-violet-400">Front End</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        Minha <span class="text-violet-400">linguagem principal é</span> Javascript <br/>
        Frameworks e Libraries: <span class="text-violet-400">ReactJS, VueJS, NextJS e Svelte.</span>
      </p>
      <button class="btn btn-primary mx-auto lg:text-2xl md:text-2xl sm:text-3xl">
        Contato
      </button>
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
        Curioso para <span class="text-violet-400">ver</span> meu
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
    class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
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