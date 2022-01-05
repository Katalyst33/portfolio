<template>
  <div ref="cursor" class="cursor-custom"></div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useEventListener } from "@vueuse/core";

const cursor = ref<HTMLDivElement | null | any>(null);

useEventListener("mousemove", (e: MouseEvent) => {
  // cursor.value = e.target;
  cursor.value.setAttribute(
    "style",
    "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;"
  );
});

useEventListener("click", () => {
  cursor.value.classList.add("expand", "display:none;");
  setTimeout(() => {
    cursor.value.classList.remove("expand");
  }, 500);
});
</script>
<style>
.cursor-custom {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #d9147c;
  position: absolute;
  transition-timing-function: ease-out;
  animation: cursor-blink 1s infinite alternate;
}

.cursor-custom::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid #143ea8;
  opacity: 0.5;
  transition: opacity 0.2s;
}

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
