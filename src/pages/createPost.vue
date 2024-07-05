<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "quill-image-resize-module/image-resize.min.js";
// import { ImageResize } from 'quill-image-resize-module';

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["clean"],
  ["link", "image"],
];
const myEditor = ref(null);
const TextLength = ref(0);
const content = ref("");

const uploadModule = ref({
  name: "imageUploader",
  module: ImageUploader,
  options: {
    upload: (file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        adminApi.news
          .postContentImg(formData)
          .then((res) => {
            resolve(res.data.imgUrl);
          })
          .catch((err) => {
            reject("Upload failed");
            console.error("Error:", err);
          });
      });
    },
  },
});
const BlotFormatterModule = ref({
  name: "blotFormatter",
  module: BlotFormatter,
  options: {
    /* options */
  },
});

const onEditorChange = async (e) => {
  content.value = await myEditor.value.getHTML();
  TextLength.value = (await myEditor.value.getText().length) - 1;
};

// watch(
//   () => delta,
//   () => {
//     console.log(delta);
//   }
// );

// onMounted(() => {
//   QuillEditor.props.options.default = () => option;
// });
</script>

<template>
  <main>
    <div class="editor">
      <QuillEditor
        theme="snow"
        ref="myEditor"
        placeholder="寫點什麼..."
        :toolbar="toolbarOptions"
        :modules="[uploadModule, BlotFormatterModule, Resize]"
        contentType="html"
        @update:content="onEditorChange($event)"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/style/main.scss";
.editor {
  background: #fff;
  color: #000;
}
</style>
