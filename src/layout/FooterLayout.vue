<template>
  <div class="px-40">
    <div class="flex space-x-10 py-10 regular-text">
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
