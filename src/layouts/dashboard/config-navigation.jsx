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
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'popups',
    path: '/popups',
    icon: icon('ic_cart'),
  },
  {
    title: 'departments',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'attendance',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'leaves',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Holidays',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'payroll',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'jobs',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'settings',
    path: '/blog',
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
