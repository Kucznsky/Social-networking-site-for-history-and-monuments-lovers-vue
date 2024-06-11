import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homePage.vue'
import PostPage from '@/views/PostPage.vue'
import NewPostForm from '@/views/NewPostForm.vue'
import UserPosts from '@/views/UserPosts.vue'
import LikedPosts from '@/views/LikedPosts.vue'
import UserRegisteredMessage from '@/views/UserRegisteredMessage.vue'
import NotVerifiedMessage from '@/views/NotVerifiedMessage.vue'
import RegisterLoginPage from '@/views/RegisterLoginPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: 'post/:id',
          component: PostPage
        },
        {
          path: 'new-post',
          component: NewPostForm
          // auth guard
        },
        {
          path: 'users-posts/:id',
          component: UserPosts
          // auth guard
        },
        {
          path: 'liked-posts/:id',
          component: LikedPosts
          // auth guard
        },
        {
          path: 'user-registered',
          component: UserRegisteredMessage
        },
        {
          path: 'not-verified',
          component: NotVerifiedMessage
        },
        {
          path: 'auth',
          // autentication page guard
          children: [
            {
              path: 'login',
              component: RegisterLoginPage
            },
            {
              path: 'register',
              component: RegisterLoginPage
            }
          ]
        }
      ] 
    },
    { path: '**', redirectTo: '/' },
  ]
})