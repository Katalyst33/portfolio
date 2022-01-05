<template>
  <div class="pl-10">
    <AppLogo class="flex" />
    <img class="rounded-full h-[200px] clip-circle" src="@/assets/img/me.png" />

    <div class="flex flex-col space-y-3 text-left regular-text">
      <ul v-for="(item, index) in menuItems" :key="index">
        <li class="flex items-center">
          <i :class="item.icon"></i>
          <router-link
            class="pl-4 text-left capitalize hidden md:block menu-text"
            :to="item.link"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { dummy_text_short, menuItems } from "../../export";

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
