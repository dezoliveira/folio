<script>
  export let y

  $:isRolling = y > 0

  let tabs = [
    {name :'Home', link: '#'},
    {name: 'Projects', link: '#projects'},
    {name: 'About me', link: '#about'},
  ]

</script>
<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid" + 
  (
    isRolling ?
      " navbar py-4 bg-primary text-primary-content"
      : " py-4 bg-transparent border-transparent "
  )}>
  <h1 class="font-medium">
    <b class="font-bold">Andres</b>
  </h1>
  <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
    {#each tabs as tab}
      <a  href={tab.link} class={"duration-200" + (isRolling ? " hover:text-secondary font-bold" : " hover:text-primary")}>
        <p>{tab.name}</p>
      </a>
    {/each}
  </div>
  <button class={"btn" + (isRolling ? " btn": " btn btn-primary")}>Login</button>
</header>