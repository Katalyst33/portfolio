<template>
  <div class="p-2">
    <div class="flex justify-between items-center">
      <AppLogo class="xl:hidden block" />
      <div></div>
      <div class="flex items-center space-x-4">
        <button class="cursor-pointer text-green-400" @click="setTheme">
          click
        </button>
        <ul v-for="(item, index) in menuItems" :key="index">
          <li class="flex items-center space-x-1">
            <router-link class="px-2 menu-text" :to="item.link">
              <i :class="item.icon"></i>
              <span class="capitalize pl-2 hidden xl:inline">{{
                item.title
              }}</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "@/components/icons/AppLogo.vue";
import { menuItems } from "../export";

function setTheme() {
  const body = document.getElementById("theme") as HTMLBodyElement;
  console.log(body);
  const light = localStorage.theme === "light";
  if (light) {
    localStorage.theme = "dark";
    body.classList.add("dark");
  } else {
    localStorage.theme = "light";

    body.classList.remove("dark");
  }
}
</script>
