import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
   { 
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "Home" */ '../pages/Home.vue') 
    },
    { 
    path: '/movies',
    name: 'movies',
    component: () => import( /* webpackChunkName: "movies" */ '../pages/Movies.vue'),
    },
    {
     path: '/characters',
     name: 'characters',
     component: () => import( /* webpackChunkName: "characters" */ '../pages/Characters.vue')   
    },
    { path: '/:pathMatch(.*)*',
      redirect: {name: 'home'}
    },

]



const router = createRouter({
   
    history: createWebHashHistory(),
    routes, 
  })
  
  export default router