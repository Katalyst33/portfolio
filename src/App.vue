<script setup lang="ts">
import HeaderComponent from "@/HeaderComponent.vue";
import SideBarComponent from "@/components/SideBarComponent.vue";
import FooterLayout from "@/layout/FooterLayout.vue";
import MobileSideBar from "@/views/MobileSideBar.vue";

// import MouseComponent from "@/MouseComponent.vue";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
</script>
<template>
  <!--  <MouseComponent />-->
  <div class="h-screen overflow-y-hidden w-screen">
    <!--    <div class="page-load">Load page</div>-->
    <HeaderComponent />
    <MobileSideBar />
    <div class="">
      <div class>
        <div class="grid xl:grid-cols-4">
          <div class="hidden xl:block">
            <SideBarComponent />
          </div>
          <div
            class="bg-[#f8f8f8] dark:bg-slate-900 h-screen col-span-3 overflow-y-scroll"
          >
            <router-view v-slot="{ Component, route }" class="md:p-20 px-4">
              <transition name="route" mode="out-in">
                <component :is="Component" :key="route.path" />
              </transition>
            </router-view>
            <FooterLayout v-if="false" class="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../src/assets/scss/app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*cursor: url("@/icons/sharing.png"), auto;*/
  /*cursor: none;*/
}

.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.page-load {
  @apply h-screen;
  animation-name: page-load;
  animation-duration: 2s;

  //opacity: 0%;
}

@keyframes page-load {
  from {
    opacity: 100%;
    background-color: red;
  }
  to {
    //visibility: hidden;
    display: none;
  }
}
</style>
