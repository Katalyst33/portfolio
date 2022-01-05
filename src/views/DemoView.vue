<script setup lang="ts">
import { dummy_text1k, dummy_text_short } from "../../export";
</script>

<template>
  <main>
    <h1 class="title capitalize">{{ $route.name }}</h1>
    <p v-html="dummy_text1k"></p>
    <p class="bg-amber-700">
      {{ dummy_text_short }}
    </p>
    <p class="bg-amber-700">
      {{ dummy_text_short }}
    </p>
    <p class="bg-amber-700">
      {{ dummy_text_short }}
    </p>
  </main>
</template>
