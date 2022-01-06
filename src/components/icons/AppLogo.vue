<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 289"
      xml:space="preserve"
      class="fill-current regular-text h-10"
    >
      <path
        d="M323.7 223.3h-5.8l-.1.1-46-.3-35-.2h-.3l86.6-124.1 21.8-31.3 24.2-34.7h-22.5l-304.8-.4L79.7 71l210.8.4L185.2 224l-25.5 37-.4.5h176.1l.2-.1h115.6l34.7-38.1h-29.8z"
      />
      <path
        d="M214 128.6H75.8l-33 37.2h141.6zM311.7 165.8h114.8l29.6-37.2H337.5zM487 32.4h-81.3l-25.8 37.2h77.5zM12.6 261.2h117.6l24.6-37.2H40z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: "AppLogo",
};
</script>
<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
