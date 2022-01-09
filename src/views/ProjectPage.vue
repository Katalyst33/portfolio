<template>
  <div>
    <h1 class="title">Project page</h1>
    <div class="tab" v-for="(item, index) in projects" :key="index">
      <div class="flex flex-col xl:flex-row">
        <h1 class="font-bold regular-text text-2xl">{{ item.name }}</h1>
        <a target="_blank" :href="item.link">
          <img
            class="bg-green-500"
            style="width: 500px; height: 300px"
            src="https://picsum.photos/500/?random"
          />
        </a>
        <div class="regular-text space-y-4">
          <div class="dark:bg-slate-800 p-4">
            <div>
              <p>{{ item.description }}</p>
            </div>

            <div>
              <h3 class="mt-4">Roles</h3>
              <ul
                class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 text-slate-200 font-medium pb-4"
              >
                <li v-for="(item, index) in item.roles" :key="index" class="">
                  {{ item }},
                </li>
              </ul>
              <a target="_blank" :href="item.link">
                <i class="fad fa-external-link-alt font-bold py-4"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "H2O Doorstep Water Delivery",
    link: "https://h2o.ng",
    img: "https://picsum.photos/500/?random",
    description: `H2O is a doorstep water delivery service, that features a payment system, and a delivery system.
     it is built with an administrator for to manage products and process orders`,
    roles: ["Design Lead", "Ui / Ux Designer", "Frontend Developer"],
  },
  {
    name: "Grand Eagle Travels",
    link: "https://getravelandtours.com/",
    img: "https://picsum.photos/500/?random",

    description: `Grand Eagle Travels is a travel agency web application for users to book and process there travel destinations with the agency
 it features a  administrator dashboard for managing travel destinations, processing personal
 information and user.  it also features  a user dashboard for users to provide information and manage destination `,

    roles: [
      "Design Lead",
      "Ui / Ux Designer",
      "Frontend Developer",
      "Technical lead",
      "Backend Developer",
    ],
  },
  {
    name: "Wildstream Music",
    link: "https://www.wildstream.ng/",
    img: "https://picsum.photos/500/?random",
    description: `Wildstream music is one of the largest Nigeria based music streaming service for local and international artists.
     nicked named the soundcloud of Nigeria. it boast a  daily uploads of over 1000 songs.`,
    roles: ["Design Lead", "Ui / Ux Designer"],
  },
  {
    name: "Katalyst Technologies",
    link: "https://katalyst.tech/",
    img: "https://picsum.photos/500/?random",
    description: `Katalyst Technologies is a company website built with wordpress, it features a admin dashboard for managing content and updating content about the company oin the website`,
    roles: ["Web developer"],
  },
]);
</script>
