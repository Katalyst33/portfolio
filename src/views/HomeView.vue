<template>
  <div class="flex h-screen justify-center items-center">
    <div class="text-default">
      <main class="flex flex-col lg:flex-row items-center regular-text">
        <ProfileImage />
        <div>
          <h1 class="text-5xl font-medium text-left">
            Hello, <br class="xl:hidden" />
            I’m Chibu<span class="font-bold underline decoration-emerald-400"
              >eze</span
            >
            Nmeje.
          </h1>
          <p class="text-justify py-4 lg:w-[600px]">
            I a I’m a Staff Software Engineer working on Front-End Experiences
            at Algolia. I can't shut up about test-driven development and
            utility-first CSS. I also host the Developer Experience podcast, and
            share what I learn on my blog frontstuff.io, or at meetups and
            conferences.
          </p>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import ProfileImage from "@/components/ProfileImage.vue";
export default {
  components: { ProfileImage },
};
</script>

<style scoped>
.clip-circle {
  clip-path: circle(42% at 50% 50%);
  shape-outside: circle(42% at 50% 50%);
  /* OLD VALUE example: circle(245px, 140px, 50px); */
  /* Yep, even the new clip-path has deprecated stuff. */
}
</style>
