<template>
  <div>
    <h1 class="title">Project page</h1>
    <div class="tab py-10" v-for="(item, index) in projects" :key="index">
      <div class="grid lg:grid-cols-2 gap-x-10 gap-y-10">
        <div :class="isOddNumber(index) ? 'lg:order-1' : ''">
          <a
            style="width: 500px; height: 300px"
            target="_blank"
            class="rounded-md"
            :href="item.link"
          >
            <div class="relative rounded-full order-1">
              <img
                class="rounded-md"
                style="width: 500px; height: 300px"
                src="https://picsum.photos/1000/"
              />
              <!--              <div
                class="bg-[#1d4550] rounded-md opacity-75 hover:opacity-0 absolute top-0 bottom-0 left-0 transition duration-500 ease-in-out"
                style="width: 500px; height: 300px"
              ></div>-->
            </div>
          </a>
        </div>
        <div class="regular-text space-y-4">
          <h1
            class="font-bold regular-text text-2xl"
            :class="isOddNumber(index) ? '' : 'lg:text-right'"
          >
            {{ item.name }}
          </h1>

          <div :class="isOddNumber(index) ? 'text-left' : 'lg:text-right'">
            <div class="bg-gray-100 dark:bg-slate-800 p-4">
              <div>
                <p class="">{{ item.description }}</p>
              </div>
            </div>
            <div
              class="flex"
              :class="isOddNumber(index) ? '' : 'lg:justify-end'"
            >
              <div>
                <h3 class="mt-4">Responsibility</h3>
                <ul
                  class="flex flex-row space-x-2 text-slate-200 font-medium pb-4 text-right"
                >
                  <li
                    v-for="(roles, index) in item.roles"
                    :key="index"
                    class=""
                  >
                    {{ roles }}
                  </li>
                </ul>
                <a
                  class="flex"
                  :class="isOddNumber(index) ? '' : 'justify-end'"
                  target="_blank"
                  :href="item.link"
                >
                  <i class="fad fa-external-link-alt font-bold py-4"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const projects = ref([
  {
    name: "H2O Doorstep Water Delivery",
    link: "https://h2o.ng",
    img: "https://picsum.photos/500/?random",
    description: `H2O is a doorstep water delivery service, that features a payment system, and a delivery system.
     it is built with an administrator for to manage products and process orders`,
    roles: ["Ideation,", "Design,", "Ui / Ux, ", "Frontend"],
  },
  {
    name: "Grand Eagle Travels",
    link: "https://getravelandtours.com/",
    img: "https://picsum.photos/500/?random",

    description: `Grand Eagle Travels is a travel agency web application for users to book and process there travel destinations with the agency
 it features a  administrator dashboard for managing travel destinations, processing personal
 information and user.  it also features  a user dashboard for users to provide information and manage destination.`,

    roles: ["Ideation,", "Ui / Ux, ", "Frontend,", "Backend "],
  },
  {
    name: "Wildstream Music",
    link: "https://www.wildstream.ng/",
    img: "https://picsum.photos/500/?random",
    description: `Wildstream music is one of the largest Nigeria based music streaming service for local and international artists.
     nicked named the soundcloud of Nigeria. it boast a  daily uploads of over 1000 songs.`,
    roles: ["Design,", "Ui / Ux,"],
  },
  {
    name: "Katalyst Technologies",
    link: "https://katalyst.tech/",
    img: "https://picsum.photos/500/?random",
    description: `Katalyst Technologies is a company website built with wordpress, it features a admin dashboard for managing content and updating content about the company oin the website.`,
    roles: ["Web developer"],
  },
]);

function isOddNumber(num) {
  return num % 2 !== 0;
}
</script>

<style>
.project-img {
  height: 400px;
  width: 400px;
  color: white;

  background: linear-gradient(to top, #1d45508e, #1d45508e),
    url(https://picsum.photos/1280/853/?random=1) no-repeat top center;
}
.project-img:hover {
  background: linear-gradient(transparent, #24d528),
    url(https://picsum.photos/1280/853/?random=2) no-repeat top center;
}
</style>
