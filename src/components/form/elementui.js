import Vue from "vue";

import { Form, FormItem } from "element-ui";

const elements = [Form, FormItem];

elements.forEach((element) => {
  Vue.use(element);
});
