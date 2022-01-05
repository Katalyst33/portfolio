<template>
  <div class="shadow-lg border-b border-b-slate-50 dark:border-b-green-500">
    <div class="flex justify-between items-center">
      <AppLogo />
      <div class="flex items-center space-x-4">
        <button @click="setTheme">click</button>
        <ul v-for="(item, index) in menuItems" :key="index">
          <li class="flex items-center space-x-1">
            <i :class="item.icon"></i>
            <router-link
              class="px-2 hidden md:block dark:text-slate-50"
              :to="item.link"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "@/components/icons/AppLogo.vue";

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

const menuItems = [
  {
    title: "Home",
    link: "/",
    icon: "fad fa-home-lg-alt",
  },
  {
    title: "About",
    link: "/about",
    icon: "fad fa-info-circle",
  },
  {
    title: "Contact",
    link: "/contact",
    icon: "fad fa-address-card",
  },
  {
    title: "Login",
    link: "/login",
    icon: "fad fa-sign-in-alt",
  },
  {
    title: "Register",
    link: "/register",
    icon: "fad fa-user-plus",
  },
];
</script>
