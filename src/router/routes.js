
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Lista.vue') },
      { path: '/Ajuda', component: () => import('pages/Ajuda.vue') },
      { path: '/what', component: () => import('pages/what.vue') },
      { path: '/star', component: () => import('pages/star.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
