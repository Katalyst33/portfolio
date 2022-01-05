<script setup lang="ts">
import { dummy_text1k, dummy_text_short } from "../export";
import HeaderComponent from "@/HeaderComponent.vue";
// import MouseComponent from "@/MouseComponent.vue";
</script>
<template>
  <!--  <MouseComponent />-->
  <HeaderComponent />
  <div class="h-screen bg-yellow-200 overflow-y-hidden">
    <div class="container mx-auto">
      <div class>
        <div class="grid grid-cols-2">
          <div class="bg-green-500">
            {{ dummy_text1k }}
          </div>
          <div class="bg-red-500 h-[1000px] overflow-y-scroll">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
