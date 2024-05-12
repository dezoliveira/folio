<script>

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
        <h4 class="relative z-9">Get in touch &rarr;</h4>
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

  </section>
</main>