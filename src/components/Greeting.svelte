<script lang="ts">
  export let messages: string[];
  let currentIndex: number = -1;

  let greeting = messages[0];

  const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    if (randomIndex === currentIndex) {
      randomMessage();
    } else {
      currentIndex = randomIndex;
      greeting = messages[currentIndex];
    }
  };
</script>

<div>
  <h3>{greeting}! Thank you for visiting!</h3>
  <button on:click={randomMessage}> New Greeting </button>
</div>
