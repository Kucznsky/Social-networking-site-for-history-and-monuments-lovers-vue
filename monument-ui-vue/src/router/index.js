import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PostPage from '@/views/PostPage.vue'
import NewPostForm from '@/views/NewPostForm.vue'
import UserPosts from '@/views/UserPosts.vue'
import LikedPosts from '@/views/LikedPosts.vue'
import UserRegisteredMessage from '@/views/UserRegisteredMessage.vue'
import NotVerifiedMessage from '@/views/NotVerifiedMessage.vue'
import RegisterLoginPage from '@/views/RegisterLoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: HomePage,
      children: [
        {
          path: 'post/:id',
          name: "post",
          component: PostPage
        },
        {
          path: 'new-post',
          name: "new-post",
          component: NewPostForm
          // auth guard
        },
        {
          path: 'users-posts/:id',
          name: "users-posts",
          component: UserPosts
          // auth guard
        },
        {
          path: 'liked-posts/:id',
          name: 'liked-posts',
          component: LikedPosts
          // auth guard
        },
        {
          path: 'user-registered',
          name: 'user-registered',
          component: UserRegisteredMessage
        },
        {
          path: 'not-verified',
          name: 'not-verified',
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
    { path: '/**', redirectTo: '/' },
  ]
})

export default router
