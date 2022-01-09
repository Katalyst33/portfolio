<template>
  <div class="">
    <div class="flex flex-col my-20 regular-text">
      <div v-for="(item, index) in samples" :key="index">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
      </div>
      <a href=""></a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { samples } from "../../export";
</script>
