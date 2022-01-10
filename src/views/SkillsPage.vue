<template>
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
  { title: "Vue", image: "" },
  { title: "React", image: "" },
  { title: "Xpresser Ts", image: "" },
  { title: "Express", image: "" },
  { title: "WordPress", image: "" },
  { title: "Vite", image: "" },
  { title: "Node js", image: "" },
  { title: "Mongodb", image: "" },
  { title: "Netlify", image: "" },
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
