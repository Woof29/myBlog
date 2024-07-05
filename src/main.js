import { createApp } from "vue";
import "@/style/main.scss";
import App from "./App.vue";
import router from "./router/router";
import Vue2Editor from "vue2-editor";
import { QuillEditor, Quill } from "@vueup/vue-quill";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageResize", ImageResize);

const app = createApp(App);

app.component("QuillEditor", QuillEditor);
app.use(router);
app.mount("#app");
