import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CalendarView from '../views/CalendarView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import NewDataView from '../views/NewDataView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        public: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        public: true,
        iconOverride: 'how_to_reg',
      }
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView,
      meta: {
        iconOverride: 'calendar_month',
      }
    },
    {
      path: '/user',
      name: 'user',
      component: UserInfoView,
      meta: {
        iconOverride: 'person',
      }
    },
    {
      path: '/newdata',
      name: 'newdata',
      component: NewDataView,
      meta: {
        dontDisplay: true,
        displayOnRoutes: ['analytics', 'calendar'],
      }
    }
  ]
});

router.beforeEach((to, from) => {
  const userStore = useUserStore();

  if (to.meta['public'] || userStore.loggedIn()) {
    return;
  }

  router.push('login');
});

export default router
