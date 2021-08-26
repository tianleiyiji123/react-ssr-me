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
  component: loadable(() => import('@/pages/list'), {
    ...loadableConfig
  })
}

const detail: RouteItem = {
  path: '/detail/:imgUrl',
  component: loadable(() => import('@/pages/detail'), {
    ...loadableConfig
  })
}

export default [list, detail]
