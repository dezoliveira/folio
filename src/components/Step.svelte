<script>
  export let step
</script>
<a
  href={step.href}
  target="_blank"
  class="p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 rounded-lg border border-solid border-violet-700 text-center
  group cursor-pointer hover:border-violet-400 duration-200 min-h[450px] max-h[450px]"
>
  <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl
  -mt-10 sm:mt-12 md:-mt-12 lg:-mt-16 mx-auto duration-200 p-4 rounded-full">
    <i class="{step.icon}" />
  </div>
  <h3 class="font-medium text-2xl sm:text-2xl md:text-3xl">
    {step.name}
  </h3>
  <slot/>
  <div class="flex-1 flex justify-center gap-2 items-center">
    <a href={step.production} target="_blank">
      <button class="btn btn-primary">Live</button>
    </a>
    <a href={step.github} target="_blank">
      <button class="btn btn-outline btn-secondary">Code</button>
    </a>
      
  </div>
</a>