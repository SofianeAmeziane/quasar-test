const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/students",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/students/StudentsPage.vue") },
    ],
  },
  {
    path: "/students/create",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/students/CreatePage.vue") },
    ],
  },
  {
    path: "/students/:id/edit",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/students/EditePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
