import Vue from "vue";
import Router from "vue-router";
import Signin from "../components/Signin.vue";
import Login from "../components/Login.vue";
import Calendar from "../components/Calendar.vue";
import EventForm from "../components/EventForm.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      name: "home",
      component: Calendar,
      path: "/"
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },

      {
        name: "",
          component: EventForm,
          path: "/event/add"
      }
  ]
});
