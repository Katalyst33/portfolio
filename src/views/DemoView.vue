<script setup lang="ts">
import { dummy_text1k, dummy_text_short } from "../../export";
</script>

<template>
  <div>
    <main class="container mx-auto p-10">
      <h1 class="title capitalize">{{ $route.name }}</h1>
      <div class="text-justify">
        <p class="regular-text">{{ dummy_text1k }}</p>
        <p class="bg-amber-700">
          {{ dummy_text_short }}
        </p>
        <p class="bg-amber-700">
          {{ dummy_text_short }}
        </p>
        <p class="bg-amber-700">
          {{ dummy_text_short }}
        </p>
      </div>
    </main>
  </div>
</template>
