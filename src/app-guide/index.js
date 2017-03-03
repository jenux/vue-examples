import App from './App'

const routes = [
  {
    path: '',
    component: require('./intro/intro')
  },
  {
    path: 'intro',
    component: require('./intro/intro'),
    title: 'Introduction'
  },
  {
    path: 'template',
    component: require('./template/template'),
    title: 'Template Syntax'
  },
  {
    path: 'transitions',
    component: require('./transitions/transitions'),
    title: 'Transition Effects',
    tag: 'Advanced'
  },
  {
    path: 'test',
    component: {template: '<div>test</div>'},
    title: 'Test',
    tag: 'Extra'
  }
]

export { routes, App }
