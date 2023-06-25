import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
   { 
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "Home" */ '../pages/Home.vue'),
    props: (route) => {console.log(route)}
    },
    { 
    path: '/movies',
    name: 'movies',
    component: () => import( /* webpackChunkName: "movies" */ '../pages/Movies.vue'),
    props: (route) => {
       const {name} = route
       return {title: name.charAt(0).toUpperCase() + name.slice(1)}
    }
    },
    {
     path: '/characters',
     name: 'characters',
     component: () => import( /* webpackChunkName: "characters" */ '../pages/Characters.vue') ,
     props: (route) => {
      const {name} = route
      return {title: name.charAt(0).toUpperCase() + name.slice(1)}
   }  
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