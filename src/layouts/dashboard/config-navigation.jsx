import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'employees',
    path: '/employees',
    icon: icon('ic_user'),
  },
  {
    title: 'popups',
    path: '/popups',
    icon: icon('ic_cart'),
  },
  {
    title: 'departments',
    path: '/departments',
    icon: icon('ic_cart'),
  },
  {
    title: 'attendance',
    path: '/attendance',
    icon: icon('ic_blog'),
  },
  {
    title: 'leaves',
    path: '/leaves',
    icon: icon('ic_blog'),
  },
  {
    title: 'holidays',
    path: '/Holidays',
    icon: icon('ic_blog'),
  },
  {
    title: 'payroll',
    path: '/payroll',
    icon: icon('ic_blog'),
  },
  {
    title: 'jobs',
    path: '/jobs',
    icon: icon('ic_blog'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
