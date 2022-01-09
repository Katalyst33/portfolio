<template>
  <div>
    <h1 class="title">Project page</h1>
    <div class="tab" v-for="(item, index) in projects" :key="index">
      <div class="flex flex-col xl:flex-row">
        <a target="_blank" :href="item.link">
          <img class="" style="width: 500px; height: 300px" :src="item.img" />
        </a>
        <div class="regular-text space-y-4">
          <h1 class="font-bold text-2xl">{{ item.name }}</h1>
          <div class="dark:bg-slate-800">
            <p>{{ item.description }}</p>
            <a target="_blank" :href="item.link">
              <i class="fad fa-external-link-alt font-bold"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "H2o Doorstep Water Delivery",
    link: "https://h2o.ng",
    img: "https://picsum.photos/500/700/?random",
    description: `H2O is a doorstep water delivery service, that features a payment system, and a delivery system.
     it is built with an administrator for to manage products and process orders`,
    roles: ["Design Lead", "Ui / Ux Designer", "Frontend Developer"],
  },
  {
    name: "Grand Eagle Travels",
    link: "https://getravelandtours.com/",
    img: "https://picsum.photos/500/700/?random",

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
    link: "http://wildstream.ng/",
    img: "https://picsum.photos/200/300/?random",
    description: `Wildstream music is  Nigeria based music streaming service for local and international artists.
     with a daily ,`,
    roles: ["Design Lead", "Ui / Ux Designer"],
  },
];
</script>
