// Functions that currently we don't need

exports.createMenu = function (role) {
  let main = [
    { key: 'home', path: '/' },
    {
      key: 'courses',
      sub: [
        { key: 'recorded', path: '/courses?type=recorded' },
        { key: 'live', path: '/courses?type=live' },
      ],
    },
  ];
  const others = [
    { key: 'contact', path: '/contact-us' },
    { key: 'about', path: '/about-us' },
    { key: 'terms', path: '/terms' },
    { key: 'privacy', path: '/privacy' },
    { key: 'teaching', path: '/teaching' },
  ];
  const account = [
    { key: 'edit', path: '/account/edit' },
    { key: 'settings', path: '/account/settings' },
    { key: 'purchased', path: '/account/purchased' },
  ];
  const user = [
    { key: 'register', path: '/user/register' },
    { key: 'login', path: '/user/login' },
    { key: 'logout', path: '/user/logout' },
  ];
  const profile = [
    { key: 'profile', path: '/profile' },
    { key: 'wishlist', path: '/profile/wishlist' },
    { key: 'cart', path: '/profile/cart' },
  ];
  const teacher = [
    { key: 'mycourses', path: '/teacher/courses' },
    { key: 'add_course', path: '/teacher/courses/add' },
    { key: 'wallet', path: '/teacher/wallet' },
    { key: 'payouts', path: '/teacher/wallet/history' },
    { key: 'request_payout', path: '/teacher/wallet/request-payout' },
  ];
  const dashboard = [
    { key: 'overall_stats', path: '/admin/dashboard' },
    { key: 'courses_stats', path: '/admin/dashboard/courses' },
    { key: 'users_stats', path: '/admin/dashboard/users' },
  ];
  const admin = [
    { key: 'categories', path: '/admin/categories' },
    { key: 'add_course', path: '/admin/categories/add' },
    { key: 'users', path: '/admin/users' },
    { key: 'add_user', path: '/admin/users/add' },
    { key: 'settings', path: '/admin/settings' },
  ];

  switch (role) {
    case 'student':
      return [...main, { key: 'student', sub: profile }];
    case 'teacher':
      return [
        ...main,
        { key: 'teacher', sub: teacher },
        { key: 'student', sub: profile },
      ];
    case 'admin':
      return [
        ...main,
        { key: 'admin', sub: admin },
        { key: 'teacher', sub: teacher },
        { key: 'student', sub: profile },
      ];
    default:
      return menu;
  }
};
