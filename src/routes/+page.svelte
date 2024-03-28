<script>
    import { tweened } from "svelte/motion";
    // eslint-disable-next-line import/no-duplicates
    import { quartInOut } from "svelte/easing";
    let src = "https://source.unsplash.com/random";
    const width = tweened(100, {
        duration: 2000,
        easing: quartInOut
    });
    function handleClick() {
        width.set(150);
    }
</script>

<button on:click={handleClick}>Animate</button>
<br />
<img {src} width={$width} alt="" />