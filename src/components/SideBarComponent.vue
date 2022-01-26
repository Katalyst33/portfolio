<template>
  <div
    class="flex h-screen justify-center items-center regular-text border-r border-r-slate-200"
  >
    <div>
      <AppLogo />
      <div class="flex flex-col space-y-3 pt-10 -ml-4">
        <ul v-for="(item, index) in menuItems" :key="index">
          <li class="flex items-center">
            <router-link
              class="pl-4 text-left capitalize hidden md:block menu-text"
              :to="{ name: item.name }"
            >
              <i :class="item.icon"></i> {{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { menuItems } from "../../export";

import AppLogo from "@/components/icons/AppLogo.vue";
</script>
<style lang="scss">
@import "../assets/scss/app";

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

.clip-circle {
  //clip-path: circle(85px at center);
  clip-path: circle(42% at 50% 50%);
  /* OLD VALUE example: circle(245px, 140px, 50px); */
  /* Yep, even the new clip-path has deprecated stuff. */
}
</style>
