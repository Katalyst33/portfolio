<template>
  <div>
    <div class="grid xl:grid-cols-3 regular-text lg:px-10 py-20">
      <div>
        <h1 class="title">Experience</h1>
      </div>
      <div class="col-span-2 lg:p-2">
        <div class="lg:flex">
          <div class="hidden lg:inline space-y-2">
            <div class="h-[400px] border-l border-l-green-300 px-4"></div>
            <div class="h-[100px] border-l border-l-green-300 px-4"></div>
          </div>
          <div class="space-y-4">
            <div class="">
              <div class="">
                <div
                  class="tab"
                  v-for="(item, index) in experiences"
                  :key="index"
                >
                  <h1 class="text-xl font-medium">
                    {{ item.role }}
                  </h1>
                  <h1 class="text-green-400 font-medium">
                    {{ item.company }}
                  </h1>
                  <div class="pt-2">
                    <ul class="space-y-2">
                      <li
                        v-for="(item, index) in item.description"
                        :key="index"
                        class=""
                      >
                        <div class="flex gap-x-2">
                          <i class="fal fa-caret-right"></i>
                          <p>{{ item }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const experiences = ref([
  {
    company: "Katalyst technologies",
    role: "Lead Front End Developer",
    description: [
      "Manage website development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility.",
      "Work closely with programmers and clients to meet project requirements, goals, and desired functionality.",
      "Delivered several WordPress websites and web application for small to medium-sized businesses.",
      "Developed websites from front to backend using Vue js, Node js, and Mongodb.",
      "Conduct training for clients on handling website content management systems.",
    ],
  },

  {
    company: "Wildstream Music",
    role: "Product Designer",
    description: [
      "Performed ideation, sketching and wireframing.",
      "Assessed UX and UI design for technical feasibility and usability",
    ],
  },
  {
    company: "Disenvi",
    role: "Lead designer",
    description: [
      "Implemented websites, mobile application, and landing pages from concept to development",
      "Standardized all output with a new, responsive, mobile-first approach and strategy",
      "Assessed UX and UI design for technical feasibility and usability",
      "collaborated with product team members to implement new featues development",
    ],
  },
]);
</script>

<style lang="scss"></style>
