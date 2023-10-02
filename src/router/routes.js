
const routes = [
  {
    path: '/',
    component: () => import('pages/TemplateFirst/FirstTemp.vue'),
  },

  {
    path: '/template-first/thanks',
    component: () => import('pages/TemplateFirst/ThanksTemp.vue'),
  },

  {
    path: '/template-first/upsell',
    component: () => import('pages/TemplateFirst/UpsellTemp.vue'),
  },

  {
    path: '/template-second/first',
    component: () => import('pages/TemplateSecond/FirstTemp.vue'),
  },

  {
    path: '/template-second/second',
    component: () => import('pages/TemplateSecond/SecondTemp.vue'),
  },

  {
    path: '/template-second/upsell',
    component: () => import('pages/TemplateSecond/UpsellTemp.vue'),
  },

  {
    path: '/template-second/thanks',
    component: () => import('pages/TemplateSecond/ThanksTemp.vue'),
  },

  {
    path: '/template-third/first',
    component: () => import('pages/TemplateThird/FirstTemp.vue'),
  },

  {
    path: '/template-third/thanks',
    component: () => import('pages/TemplateThird/ThanksTemp.vue'),
  },

  {
    path: '/template-third/upsell',
    component: () => import('pages/TemplateThird/UpsellTemp.vue'),
  },

  {
    path: '/template-fourth/first',
    component: () => import('pages/TemplateFourth/FirstTemp.vue'),
  },

  {
    path: '/template-fourth/thanks',
    component: () => import('pages/TemplateFourth/ThanksTemp.vue'),
  },

  {
    path: '/template-fourth/upsell',
    component: () => import('pages/TemplateFourth/UpsellTemp.vue'),
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
