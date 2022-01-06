<template>
  <img class="rounded-full h-[200px] clip-circle" src="@/assets/img/me.png " />
</template>
<script>
export default {
  name: "ProfileImage",
};
</script>
<style lang="scss">
.clip-circle {
  //clip-path: circle(85px at center);
  clip-path: circle(42% at 50% 50%);
  shape-outside: circle(42% at 50% 50%);
  /* OLD VALUE example: circle(245px, 140px, 50px); */
  /* Yep, even the new clip-path has deprecated stuff. */
}
</style>
