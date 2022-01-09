<template>
  <div>
    <div class="grid xl:grid-cols-3 regular-text px-10">
      <div>
        <h1 class="title">Experience</h1>
      </div>
      <div class="col-span-2 p-2">
        <div class="flex">
          <div class="space-y-2">
            <div class="h-[400px] border-l border-l-green-300 px-4"></div>
            <div class="h-[100px] border-l border-l-green-300 px-4"></div>
          </div>
          <div class="space-y-4">
            <div class="">
              <div class="space-y-8">
                <div
                  class="tab"
                  v-for="(item, index) in experiences"
                  :key="index"
                >
                  <h1 class="text-xl font-medium">
                    {{ item.role }}
                  </h1>
                  <h1 class="text-green-400 font-medium">{{ item.company }}</h1>
                  <div>
                    <ul
                      class="px-4"
                      v-for="(item, index) in item.description"
                      :key="index"
                    >
                      <li class="list-disc">
                        {{ item }}
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
const experiences = [
  {
    company: "Katalyst technologies",
    role: "Lead Developer",
    description: [
      "11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
    ],
  },
  {
    company: "Disenvi",
    role: "Lead designer",
    description: [
      "22Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "22Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "22Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
    ],
  },
  {
    company: "Katalyst technologies",
    role: "Lead Developer",
    description: [
      "11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
    ],
  },
  {
    company: "Disenvi",
    role: "Lead designer",
    description: [
      "22Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "22Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
      "22Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae labore minus, molestias necessitatibus nobis",
    ],
  },
];
</script>

<style lang="scss"></style>
