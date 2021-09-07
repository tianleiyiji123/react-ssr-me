import React from 'react'
import { Spin } from 'antd'
import loadable, { LoadableClassComponent } from '@loadable/component'

export interface RouteItem {
  path: string
  component: LoadableClassComponent<any>
}

const loadableConfig = {
  fallback: <Spin />
}

const list: RouteItem = {
  path: '/list',
  component: loadable(() => import('src/pages/list'), {
    ...loadableConfig
  })
}

const newList: RouteItem = {
  path: '/',
  component: loadable(() => import('src/pages/newList'), {
    ...loadableConfig
  })
}

const detail: RouteItem = {
  path: '/detail/:imgUrl',
  component: loadable(() => import('src/pages/detail'), {
    ...loadableConfig
  })
}
const subDetail: RouteItem = {
  path: '/subDetail',
  component: loadable(() => import('src/pages/detail/subDetail'), {
    ...loadableConfig
  })
}

export default [list, detail, subDetail, newList]
