<template>
  <div>
    <div>
      <div class="">
        <canvas
          ref="myCanvas"
          :width="canvasDimensions.width"
          :height="canvasDimensions.height"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let myCanvas = ref(null);

const canvasDimensions = {
  width: 600,
  height: 600,
};

onMounted(() => {
  const canvas = myCanvas.value;
  let context = canvas.getContext("2d");
  context.fillStyle = "#63ffda";
  // context.fillRect(100, 100, 400, 400);

  context.lineWidth = 4;
  context.beginPath();
  context.rect(100, 100, 400, 400);
  context.strokeStyle = "#63ffda";
  // context.stroke();

  context.beginPath();
  // context.arc(300, 300, 100, 0, Math.PI * 2);
  context.strokeStyle = "#63ffda";
  // context.stroke();

  const width = 60;
  const height = 60;
  const gap = 20;
  let x, y;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      x = 100 + (width + gap) * i;
      y = 100 + (height + gap) * j;
      context.beginPath();
      context.rect(x, y, width, height);
      context.stroke();

      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + 8, y + 8, width - 16, height - 16);
        context.stroke();
      }
    }
  }
});
</script>
