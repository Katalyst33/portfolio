<template>
  <div>
    <main class="flex flex-col lg:flex-row items-center justify-center">
      <div class="w-[600px] regular-text">
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <br />

        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <br />

        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
        <br />
        <p>Here are a few technologies I’ve been working with recently:</p>
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
