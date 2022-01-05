<template>
  <header>
    <div class="flex justify-between">
      <AppLogo />
      <div>
        <ul v-for="(item, index) in menuItems" :key="index">
          <li>
            <router-link :to="item.link">{{ item.title }}</router-link>
            <i :class="item.icon"></i>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import AppLogo from "@/components/icons/AppLogo.vue";

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
