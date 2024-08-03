import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'employees',
    path: '/dashboard/employees',
    icon: icon('ic_user'),
  },
  {
    title: 'popups',
    path: '/dashboard/popups',
    icon: icon('ic_cart'),
  },
  {
    title: 'departments',
    path: '/dashboard/departments',
    icon: icon('ic_cart'),
  },
  {
    title: 'user roles',
    path: '/dashboard/userrole',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'attendance',
  //   path: '/dashboard/attendance',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'leaves',
  //   path: '/dashboard/leaves',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'holidays',
  //   path: '/dashboard/Holidays',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'payroll',
  //   path: '/dashboard/payroll',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'jobs',
  //   path: '/dashboard/jobs',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'settings',
  //   path: '/dashboard/settings',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
