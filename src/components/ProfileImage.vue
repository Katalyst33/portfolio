<template>
  <!--  <img class="rounded-full h-[200px] clip-circle" src="@/assets/img/me.png " />-->
  <div class="p-8 css-selector clip-circle">
    <img class="rounded-full h-[200px]" src="@/assets/img/me2.png " />
  </div>
</template>
<script>
export default {
  name: "ProfileImage",
};
</script>

<style lang="scss">
.st0 {
  fill: #f4dd0c;
}
.st1 {
  fill: #f91530;
}
.clip-circle {
  //clip-path: circle(85px at center);
  clip-path: circle(42% at 50% 50%);
  shape-outside: circle(42% at 50% 50%);
  /* OLD VALUE example: circle(245px, 140px, 50px); */
  /* Yep, even the new clip-path has deprecated stuff. */
}

.css-selector {
  background: linear-gradient(270deg, #0af09c, #0a93f0, #38f6b1);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  -o-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-o-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
