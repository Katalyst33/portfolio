<template>
  <button
    type="button"
    class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-slate-800 bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  >
    <i :class="icon" class="pr-2"></i>
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
