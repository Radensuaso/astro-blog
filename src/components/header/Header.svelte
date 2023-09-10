<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  let screenWidth = 0;
  let show = false;

  onMount(() => {
    screenWidth = window.innerWidth;
    show = screenWidth >= 636;

    function updateScreenSize() {
      screenWidth = window.innerWidth;
      show = screenWidth >= 636;
    }

    window.addEventListener('resize', updateScreenSize);

    onDestroy(() => {
      window.removeEventListener('resize', updateScreenSize);
    });
  });

  function toggleNavigation() {
    show = !show;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      toggleNavigation();
    }
  }
</script>

<!-- HTML -->
<header>
  <nav>
    <div
      class="hamburger"
      on:click={toggleNavigation}
      role="button"
      tabindex="0"
      on:keydown={handleKeyDown}
    >
      <span class="line" />
      <span class="line" />
      <span class="line" />
    </div>

    {#if show}
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </div>
    {/if}
  </nav>
</header>

<!-- Style -->

<style>
  /* nav styles */
  .hamburger {
    padding-right: 20px;
    cursor: pointer;
  }

  .hamburger .line {
    display: block;
    width: 40px;
    height: 5px;
    margin-bottom: 10px;
    background-color: #ff9776;
  }

  .nav-links {
    width: 100%;
    top: 5rem;
    left: 48px;
    margin: 0;
  }

  .nav-links a {
    display: block;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .nav-links a:hover,
  .nav-links a:focus {
    background-color: #ff9776;
  }

  @media screen and (min-width: 636px) {
    .nav-links {
      margin-left: 5em;
      display: block;
      position: static;
      width: auto;
      background: none;
    }

    .nav-links a {
      display: inline-block;
      padding: 15px 20px;
    }

    .hamburger {
      display: none;
    }
  }
</style>
