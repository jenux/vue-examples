import App from './App'

// sub route settings in the app
const routes = [
  {
    path: '',
    component: require('./markdown-editor/markdown-editor')
  },
  {
    path: 'markdown-editor',
    component: require('./markdown-editor/markdown-editor'),
    title: 'Markdown Editor'
  },
  {
    path: 'time-logger',
    component: require('./time-logger/time-logger'),
    title: 'Time Logger'
  }
]

export { routes, App }
