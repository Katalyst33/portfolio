<template>
  <div>
    <main class="flex flex-col lg:flex-row items-center justify-center">
      <div class="w-[600px] regular-text pt-10">
        <p>
          Hello! My name is Chibueze and I enjoy creating useful things for the
          internet. My interest in web development started back in 2015 when I
          decided to make a website using Adobe Muse — i felt very limited and
          constrained and ultimately that sparked my interest to learn more
          about Html, css and Javascript.
        </p>
        <br />

        <p>
          Fast-forward to today, and I’ve had the privilege of working at an web
          development agencies , a start-up,and a huge music Streaming platform.
          My main focus these days is building accessible, inclusive products
          and digital experiences at as a free lancer.
        </p>
        <br />

        <br />
      </div>
      <ProfileImage />
    </main>
  </div>
</template>
<script>
import ProfileImage from "../components/ProfileImage.vue";
export default {
  components: { ProfileImage },
};
</script>
