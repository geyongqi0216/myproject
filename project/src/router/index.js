import Vue from 'vue'
import VueRouter from 'vue-router'
import DevStaging from '../views/Staging.vue'
import store from '../store'

Vue.use(VueRouter)

const routesSSO = [
  {
    path: '/redirect',
    name: 'redirect',
    hidden: true,
    component: resolve => require(['../views/LoginRedirect.vue'], resolve)
  },
  {
    path: '/meta_plan',
    name: 'meta_plan',
    component: resolve => require(['../views/MetaPlan.vue'], resolve)
  },
  {
    path: '/',
    redirect: store.state.global.sso ? '/redirect' : '/welcome',
    component: resolve => require(['../views/Layout.vue'], resolve),
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: resolve => require(['../views/Welcome.vue'], resolve)//Welcome
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Dashboard.vue'], resolve)//Dashboard
      },
      {
        path: 'job_run',
        name: 'job_run',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Job/JobRun.vue'], resolve)//JobRun
      },
      {
        path: 'job_history',
        name: 'job_history',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Job/JobHistory.vue'], resolve)//JobHistory
      },
      {
        path: 'setup_hosts',
        name: 'setup_hosts',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Device/SetupHost'], resolve) //SetupHost
      },
      {
        path: 'setup_device',
        name: 'setup_device',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Device/SetupDevice'], resolve)//SetupDevice
      },
      {
        path: 'manage_reservations',
        name: 'manage_reservations',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Device/ManageReservation'], resolve)//ManageReservation
      },
      {
        path: 'novnc',
        name: 'novnc',
        component: resolve => {require(['../views/NoVNC'], resolve)}
      },
      {
        path: 'terminal',
        name: 'terminal',
        component: resolve => {require(['../views/Xterm'], resolve)}
      },
      {
        path: 'develop_staging',
        name: 'staging',
        component: DevStaging
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'manage_campaign',
        name: 'manage_campaign',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Plans/ManageCampaign'], resolve),//ManageCampaign,
        props: {title: 'campaign'}
      },
      {
        path: 'manage_package',
        name: 'manage_package',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
        props: {title: 'package'}
      },
      {
        path: 'manage_runner',
        name: 'manage_runner',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
        props: {title: 'runner'}
      },
      {
        path: 'manage_test_plan',
        name: 'manage_test_plan',
        meta: {
          // requireLogin: true
        },
        component: resolve => require(['../views/Plans/ManageTestPlan'], resolve),//Manage,
        props: {title: 'test_plan'}
      },
      {
        path: 'manage_test_build',
        name: 'manage_test_build',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
        props: {title: 'test_build'}
      },
      {
        path: 'manage_platform',
        name: 'manage_platform',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
        props: {title: 'platform'}
      },
      {
        path: 'settings_user',
        name: 'settings_user',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/Settings/UserSettings'], resolve),//Manage,
      },
      {
        path: 'log_service/*',
        name: 'log_service',
        component: resolve => require(['../components/LogManager/LogService'], resolve),//Manage,
      },
      {
        path: '/artifactory/*',
        name: 'artifactory',
        component: resolve => require(['../components/LogManager/LogService'], resolve),//Manage,
      },
      {
        path: 'settings_project',
        name: 'settings_project',
        meta: {
          requireLogin: true
        },
        component: resolve => require(['../views/404.vue'], resolve),//Manage,
      },
      {
        path: '/meta_task',
        name: 'meta_task',
        component: resolve => require(['../views/MetaTask.vue'], resolve)
      },
      {
        path: 'session/*',
        name: 'session',
        component: resolve => require(['../components/LogManager/SessionReportView'], resolve),//Manage,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/404.vue')
  }
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: resolve => require(['../views/LoginRedirect.vue'], resolve) // redirect for sso
    // component: resolve => require(['../views/Welcome.vue'], resolve)//Welcome
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: resolve => require(['../views/Welcome.vue'], resolve)//Welcome
  },
  {
    path: '/job_run',
    name: 'job_run',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Job/JobRun.vue'], resolve)//JobRun
  },
  {
    path: '/job_history',
    name: 'job_history',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Job/JobHistory.vue'], resolve)//JobHistory
  },
  {
    path: '/setup_hosts',
    name: 'setup_hosts',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Device/SetupHost'], resolve) //SetupHost
  },
  {
    path: '/setup_device',
    name: 'setup_device',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Device/SetupDevice'], resolve)//SetupDevice
  },
  {
    path: '/manage_reservations',
    name: 'manage_reservations',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Device/ManageReservation'], resolve)//ManageReservation
  },
  {
    path: '/novnc',
    name: 'novnc',
    component: resolve => {require(['../views/NoVNC'], resolve)}
  },
  {
    path: '/terminal',
    name: 'terminal',
    component: resolve => {require(['../views/Xterm'], resolve)}
  },
  {
    path: '/develop_staging',
    name: 'staging',
    component: DevStaging
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/manage_campaign',
    name: 'manage_campaign',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Plans/ManageCampaign'], resolve),//ManageCampaign,
    props: {title: 'campaign'}
  },
  {
    path: '/manage_package',
    name: 'manage_package',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
    props: {title: 'package'}
  },
  {
    path: '/manage_runner',
    name: 'manage_runner',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
    props: {title: 'runner'}
  },
  {
    path: '/manage_test_plan',
    name: 'manage_test_plan',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Plans/ManageTestPlan'], resolve),//Manage,
    props: {title: 'test_plan'}
  },
  {
    path: '/manage_test_build',
    name: 'manage_test_build',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
    props: {title: 'test_build'}
  },
  {
    path: '/manage_platform',
    name: 'manage_platform',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Plans/Manage'], resolve),//Manage,
    props: {title: 'platform'}
  },
  {
    path: '/settings_user',
    name: 'settings_user',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/Settings/UserSettings'], resolve),//Manage,
  },
  {
    path: '/settings_project',
    name: 'settings_project',
    meta: {
      requireLogin: true
    },
    component: resolve => require(['../views/404.vue'], resolve),//Manage,
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/404.vue')
  }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => {
  });
};

const router = new VueRouter({
  mode: 'history',
  routes: routesSSO
})

export default router
