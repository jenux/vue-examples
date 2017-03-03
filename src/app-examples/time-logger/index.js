import App from './App'
import Home from './Home'

export { App }

export const routes = [
  {
    path: '/time-logger',
    component: Home,
    children: [
      {
        path: '/list',
        component: {template: '<div><router-view></router-view>List</div>'},
        children: [
          {
            path: '/add',
            component: {
              template: '<div>Add Form</div>'
            }
          }
        ]
      }
    ]
  }
]
