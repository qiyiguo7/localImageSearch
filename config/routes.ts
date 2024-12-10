export default [
  {
    path: "/",
    component: "@/layouts/layouts",
    routes: [
      { path: "/", redirect: "/searchCenter" },
      { path: "/searchCenter", component: "@/pages/searchCenter" },
    ],
  },
];
