import {createRouter,createWebHashHistory} from 'vue-router'
//为什么js文件中引入vue文件时不会给出选项框了？
const login= ()=> import('../views/login.vue')
const joinOrganization= ()=> import('../views/joinOrganization.vue')
const dataManage= ()=> import('../views/dataManage.vue')
// const dataManageView=()=>import('../views/dataManageView')
// const dataManageHome= ()=>import('../views/dataManageHome')
//以上，路由懒加载
const Router=createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:'/',redirect:'/joinOrganization'},
    {
      path: '/joinOrganization',
      name: 'joinOrganization',
      component: joinOrganization
      },
    {
      path: '/login',
      name: 'login',
      component:login
      },
    {
      path: '/dataManage',
      name: 'dataManage',
      component: dataManage,
      // children:[
      //   {
      //   path:'dataManageView',
      //   name:'dataManageView',
      //   component:dataManageView,
      // },
      // {
      //   path:'dataManageHome',
      //   name:'dataManageHome',
      //   component:dataManageHome,
      // }
        // ]
      },
  ]
})
Router.beforeEach((to,from,next)=>{
  const token=sessionStorage.getItem('token');
  if(to.path==='/dataManage'&&!token){
    next(false);
    // next('/login');
    alert("未完成后台登录，跳转失败");
  }
  else{
    next();
  }
  // console.log('导航守卫');
})
export default Router