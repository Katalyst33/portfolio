<template>
  <div>
    <div class="w-full max-w-md px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel
            v-for="(posts, idx) in Object.values(categories)"
            :key="idx"
            :class="[
              'bg-white rounded-xl p-3',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
            ]"
          >
            <ul>
              <li
                v-for="post in posts"
                key="post.id"
                class="relative p-3 rounded-md hover:bg-coolGray-100"
              >
                <h3 class="text-sm font-medium leading-5">
                  {{ post.title }}
                </h3>

                <ul
                  class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                >
                  <li>{{ post.date }}</li>
                  <li>&middot;</li>
                  <li>{{ post.commentCount }} comments</li>
                  <li>&middot;</li>
                  <li>{{ post.shareCount }} shares</li>
                </ul>

                <a
                  href="#"
                  :class="[
                    'absolute inset-0 rounded-md',
                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400',
                  ]"
                />
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
  <div class="regular-text">
    <h1 class="title">Skills</h1>
    <div class="grid grid-cols-4">
      <div>
        <h1 class="text-xl font-bold py-4">Languages</h1>
        <ul>
          <li v-for="(item, index) in languages" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-xl font-bold py-4">frameworks & Technologies</h1>
        <ul>
          <li v-for="(item, index) in frameworksTechnologies" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-xl font-bold py-4">Design</h1>
        <ul>
          <li v-for="(item, index) in design" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>

      <div>
        <h1 class="text-xl font-bold py-4">Tools</h1>
        <ul>
          <li v-for="(item, index) in tools" :key="index">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
let categories = ref({
  Recent: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});

const languages = [
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
];
</script>
