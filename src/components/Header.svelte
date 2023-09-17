<script lang="ts">
  let expand = false;

  function toggleNavigation() {
    expand = !expand;
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

    <div class={expand ? 'nav-links expand' : 'nav-links'}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/tags/">Tags</a>
    </div>
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
    display: none;
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

  .expand {
    display: unset;
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
      display: block;
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
