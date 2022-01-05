<template>
  <div>
    {{ dummy_text1k }}
  </div>
</template>
<script setup>
import { dummy_text1k } from "../export";
</script>
<style lang="scss">
@import "../src/assets/scss/app.scss";

@keyframes cursor-blink {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}

@keyframes cursor-expand {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
