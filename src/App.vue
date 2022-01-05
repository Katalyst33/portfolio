<script setup lang="ts">
import HeaderComponent from "@/HeaderComponent.vue";
import SideBarComponent from "@/SideBarComponent.vue";

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
  <div class="h-screen overflow-y-hidden">
    <HeaderComponent class="shadow-orange-500" />

    <div class="">
      <div class>
        <div class="grid lg:grid-cols-4">
          <div class="hidden lg:block">
            <SideBarComponent />
          </div>
          <div class="bg-red-500 h-screen col-span-3 overflow-y-scroll">
            <router-view />
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
  text-align: center;
  color: #2c3e50;
  /*cursor: url("@/icons/sharing.png"), auto;*/
  /*cursor: none;*/
}
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
.expand {
  animation: cursor-expand 0.5s forwards;
}
</style>
