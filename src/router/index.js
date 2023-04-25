import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from "@/layout";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout, // 修改为 Layout 组件
    children: [
      {
        path: "judge/personalSummary",
        name: "JudgePersonalSummary",
        component: () => import("../views/judges/JudgePersonalSummary.vue"),
      },
      {
        path: "judge/personalSummary/situation",
        name: "JudgePersonalSummarySituaion",
        component: () =>
          import("../views/judges/JudgePersonalSummarySituation.vue"),
      },
      {
        path: "student/personalSummary",
        name: "StudentPersonalSummary",
        component: () => import("../views/students/StudentPersonalSummary.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
