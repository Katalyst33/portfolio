<template>
  <div class="flex h-screen justify-center items-center">
    <div class="">
      <main class="flex flex-col lg:flex-row items-center">
        <ProfileImage />
        <div>
          <p class="text-green-400 text-xl">Hi, my name is</p>
          <h1 class="big-title">
            Chibu<span class="font-bold underline decoration-green-400"
              >eze</span
            >
            Nmeje.
          </h1>
          <h1 class="text-5xl text-slate-200 font-bold">
            I build things for the web.
          </h1>
          <p class="text-justify py-4 lg:w-[600px] regular-text">
            i am a Front end developer based in Glasgow Scotland. Currently
            working at Katalyst Technologies as Technical Lead. I specialise in
            using Vue, React, and other current web development technologies and
            practises to create engaging experiences and functional interfaces.
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
