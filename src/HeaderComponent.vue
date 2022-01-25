<template>
  <div class="p-2">
    <div class="flex justify-between items-center">
      <AppLogo class="lg:hidden block" />
      <div></div>
      <div class="flex items-center space-x-4">
        <button class="cursor-pointer text-green-400 mr-4" @click="setTheme">
          <i
            class="fad fa-lightbulb-on dark:text-[#fce93c] text-3xl text-slate-200"
          ></i>
        </button>
        <ul
          class="hidden lg:inline xl:hidden"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <li class="flex items-center space-x-1">
            <router-link class="px-2 menu-text" :to="item.link">
              <i :class="item.icon"></i>
              <span class="capitalize pl-2 hidden lg:inline">{{
                item.title
              }}</span></router-link
            >
          </li>
        </ul>

        <div class="lg:hidden mx-4">
          <button
            type="button"
            class="px-1 text-white border-l focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            @click="toggleSideBar"
          >
            <span class="sr-only">Open sidebar</span>
            <i
              class="fad fa-bars dark:text-green-200 text-3xl text-slate-200"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "@/components/icons/AppLogo.vue";
import { menuItems } from "../export";
import { appMenuStore } from "@/stores/IndexStore";

const appMenu = appMenuStore();

const toggleSideBar = () => {
  // sidebarOpen.value = !sidebarOpen.value;
  appMenu.toggle();

  console.log("toggleSideBar");
};
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
