<template>
  <div>
    <div class="regular-text">
      <h1 class="title">Skills</h1>
      <p>Below are some of my favorite tools, framework and Languages</p>
    </div>
    <div>
      <div class="w-full px-2 py-16 sm:px-0">
        <TabGroup manual>
          <TabList
            class="grid grid-cols-2 lg:grid-cols-4 gap-y-4 p-1 space-x-1 bg-blue-900/20 rounded-xl"
          >
            <Tab
              v-for="category in Object.keys(categories)"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-full py-2.5  leading-5 font-medium dark:text-white text-xl font-bold rounded-lg',
                  'focus:outline-none ring-offset-2 ring-offset-blue-400 ring-slate-800 dark:ring-green-300 ring-opacity-60',
                  selected
                    ? 'dark:text-green-300 border border-green-600 dark:border-green-400 font-bold shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] dark:hover:text-white-300 hover:text-gray-700',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels
            class="mt-2 regular-text border border-green-600 dark:border-green-400 rounded-md"
          >
            <TabPanel
              v-for="(posts, idx) in Object.values(categories)"
              :key="idx"
              class=""
              :class="['rounded-xl p-3  ', 'focus:outline-none  ']"
            >
              <ul class="grid grid-cols-2">
                <li
                  v-for="(post, index) in posts"
                  :key="index"
                  class="relative p-3 rounded-md"
                >
                  <h3 class="text-sm font-medium leading-5">
                    {{ post.title }}
                  </h3>
                </li>
              </ul>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
let categories = ref({
  Languages: [
    { title: "JavaScript[ES6]", image: "" },
    { title: "TypeScript", image: "" },
    { title: "Bash Script", image: "" },
    { title: "HTML", image: "" },
    { title: "CSS", image: "" },
    { title: "Scss", image: "" },
    { title: "", image: "" },
  ],
  "Frameworks & Technologies": [
    { title: "Tailwind Css", image: "" },
    { title: "Bootstrap", image: "" },
    { title: "Bulma", image: "" },
    { title: "Vite", image: "" },
    { title: "Vue", image: "" },
    { title: "React", image: "" },
    { title: "Xpresser Ts", image: "" },
    { title: "Express", image: "" },
    { title: "Node js", image: "" },
    { title: "Mongodb", image: "" },
    { title: "Netlify", image: "" },
    { title: "WordPress", image: "" },
  ],
  Design: [
    { title: "Adobe Photoshop", image: "" },
    { title: "Adobe Illustrator", image: "" },
    { title: "Adobe XD", image: "" },
    { title: "Figma", image: "" },
    { title: "Prototyping", image: "" },
    { title: "Wireframing", image: "" },
  ],
  Tools: [
    { title: "Git", image: "" },
    { title: "GitHub", image: "" },
    { title: "Webstorm", image: "" },
    { title: "Stackbliz", image: "" },
    { title: "Visual Studio Code", image: "" },
    { title: "Postman", image: "" },
    { title: "Insomnia", image: "" },
    { title: "Microsoft word", image: "" },
    { title: "Microsoft Power point", image: "" },
  ],
});

/*const languages = [
  { title: "JavaScript[ES6]", image: "" },
  { title: "TypeScript", image: "" },
  { title: "Bash Script", image: "" },
  { title: "HTML", image: "" },
  { title: "CSS", image: "" },
  { title: "Scss", image: "" },
  { title: "", image: "" },
];
const frameworksTechnologies = [
  { title: "Tailwind Css", image: "" },
  { title: "Bootstrap", image: "" },
  { title: "Bulma", image: "" },
  { title: "Vite", image: "" },
  { title: "Vue", image: "" },
  { title: "React", image: "" },
  { title: "Xpresser Ts", image: "" },
  { title: "Express", image: "" },
  { title: "Node js", image: "" },
  { title: "Mongodb", image: "" },
  { title: "Netlify", image: "" },
  { title: "WordPress", image: "" },
];

const design = [
  { title: "Adobe Photoshop", image: "" },
  { title: "Adobe Illustrator", image: "" },
  { title: "Adobe XD", image: "" },
  { title: "Figma", image: "" },
  { title: "Prototyping", image: "" },
  { title: "Wireframing", image: "" },
];
const tools = [
  { title: "Git", image: "" },
  { title: "GitHub", image: "" },
  { title: "Webstorm", image: "" },
  { title: "Stackbliz", image: "" },
  { title: "Visual Studio Code", image: "" },
  { title: "Postman", image: "" },
  { title: "Insomnia", image: "" },
  { title: "Microsoft word", image: "" },
  { title: "Microsoft Power point", image: "" },
];*/
</script>
