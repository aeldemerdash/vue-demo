import Vue from 'vue';
import Router from 'vue-router';
import Users from './components/Users.vue';
import Posts from'./components/Posts.vue';
import Post from'./components/Post.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users,
    },
    {
      path:'/posts/:userId',
      name:'posts',
      component:Posts,
      props:true,
    },
     {
      path:'/post/:postId',
      name:'post',
      component:Post,
      props:true,
    },
  ],
});