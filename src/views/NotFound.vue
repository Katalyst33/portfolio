<template>
  <div class="flex justify-center items-center h-screen">
    <div class="regular-text text-center">
      <h1 class="text-3xl py-2">You seem to have lost you way</h1>
      <router-link class="underline" :to="{ name: 'Home' }"
        >Go Home</router-link
      >
    </div>
  </div>
</template>
