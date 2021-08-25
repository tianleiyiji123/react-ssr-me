interface RouteItem {
  path: string
  component(): Promise<{default: React.FC<any>}>
}