<script>
  import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";

  $:y = 0
  $: innerHeight = 0
  $: innerWidth = 0

  function goTop() {
    document.body.scrollIntoView()
  }
</script>

<div class="relative p-4 flex flex-col max-w=[1400] mx-auto w-full text-sm s:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z=[10]" + 
    (
      y > 0 ?
      " opacity-full pointer-events-auto" 
      : " pointer-events-none opacity-0"
    )}>
      <button on:click={goTop}>
        <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
      </button>
    </div>
    <Header y={y}/>
      <slot />
    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth/>