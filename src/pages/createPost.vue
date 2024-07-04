<script setup>
// import { VueEditor } from "vue2-editor";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// const myEditor = ref(null);
// const content = "<h1>Some Shit...</h1>";
const options = {
  //   debug: "info",
  modules: {
    toolbar: ["bold", "italic", "underline"],
  },
  placeholder: "Compose an epic...",
  readOnly: false,
  theme: "snow",
};

onMounted(() => {
  QuillEditor.props.options.default = () => option;
});
</script>

<template>
  <main>
    <div class="editor">
      <!-- <VueEditor v-model="content" /> -->
      <QuillEditor :options="options" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/style/main.scss";
</style>
