const list: RouteItem = {
  path: '/list',
  component: () => import('@/pages/list/index')
}

const detail: RouteItem = {
  path: '/detail',
  component: () => import('@/pages/detail/index')
}

export default [
  list,
  detail
]