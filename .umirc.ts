import { defineConfig } from "umi";
import routes from "./config/routes";

export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/searchCenter", component: "searchCenter" },
  // ],
  routes: routes,
  npmClient: "yarn",
});
